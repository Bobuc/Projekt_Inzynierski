//api key
const apikey = "b344fd2765a2602c4afb314b48ae79f5";

const main = document.getElementById("main");
const form =  document.getElementById("form");
const search =  document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pl&units=metric`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
    CanIFly(data);
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
var siema = data.main.temp;
function CanIFly(data){
    if(siema > 6){
        alert ("siema")
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
