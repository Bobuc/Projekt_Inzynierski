//api key
const apikey = "b344fd2765a2602c4afb314b48ae79f5";

const main = document.getElementById("main");
const canifly = document.getElementById("canifly");
const form =  document.getElementById("form");
const search =  document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pl&units=metric`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
    CanIFly(respData);
}

//Pogoda
function addWeatherToPage(data) {
    //unix to local
    const dateObject = new Date(data.sys.sunrise*1000)
    const dateObject1 = new Date(data.sys.sunset*1000)

    const weather = document.createElement("div");
    weather.classList.add("weather");
    //todo okreslanie warunków do latania
    weather.innerHTML = `
        <h1>Pogoda dla ${data.name}</h1>
        <br/>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${data.main.temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${(data.weather[0].description).toUpperCase()}</small>
        <br/>
        <small>Zachmurzenie : ${data.clouds.all}%</small>
        <br/>
        <small>Widoczność : ${data.visibility} metrów</small>
        <br/>
        <small>Wilgotność : ${data.main.humidity}%</small>
        <br/>
        <small>Prędkość wiatru : ${(data.wind.speed)} km/h</small>
        <br/>
        <small>Wschód słońca : ${((dateObject.toLocaleString()).slice(12,))}</small>
        <br/>
        <small>Zachód słońca : ${((dateObject1.toLocaleString()).slice(12,))}</small>
    `;

//czyszczenie
    main.innerHTML = "";

    main.appendChild(weather);

}

function CanIFly(data){

    if(data.main.temp < 6 && data.main.humidity > 60){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\">Uwaga! Niska temperatura i wysoka wilgotność. Uważaj na Oblodzenia śmigieł.</p>";
    }else if( data.wind.speed > 30){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\">Uwaga! Silny wiatr. Uważaj na szybkie porywy wiatru oraz nie lataj gdy wiatr będzie zbyt silny.</p>";
    }else if( data.main.humidity > 75){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Wysoka wilgotność. Niektóre elementy drona mogą nie działać poprawnie przy dużej wilgotności.</p>";
    }else if (data.weather.main =='Rain'){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Opady deszczu. Nie lataj podczas opadów, może to skutkować zniszczeniem drona. </p>";
    }else if (data.weather.main =='Snow'){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Opady Śniegu. Nie lataj podczas opadów, może to skutkować zniszczeniem drona. </p>";
    }else if (data.weather.main =='Drizzle'){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Mżawka. Nie lataj gdy opady będą zbyt duże . </p>";
    }else if (data.weather.main =='Thunderstorm'){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Burza. Nie lataj podczas opadów, może to skutkować zniszczeniem drona. </p>";
    }else if (data.weather.main =='Mist'){
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Uwaga! Silna mgła. Bądź ostrożny podczas latania we mgle oraz nie lataj poza zasięg swojego wzroku </p>";
    }else{
        document.getElementById("canifly").innerHTML = "<p style=\"font-size:30px\"> Dobre warunki do latania. </p>";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }else{
        //ten alert tylko na testy bo wkurza
        alert("Nie ma takiego miasta!\nWpisz poprawną nazwę miejscowości.");
    }
});
