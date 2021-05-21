const api = {
  key: "b344fd2765a2602c4afb314b48ae79f5",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&lang=pl&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  //Pogoda
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const dateObject = new Date(weather.sys.sunrise*1000)
  const dateObject1 = new Date(weather.sys.sunset*1000)
  
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.location .temp');
  temp.innerHTML = `Temp: <b><span style="color: #ffe030;">${Math.round(weather.main.temp)}</span></b>°C`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = (weather.weather[0].description).charAt(0).toUpperCase() + (weather.weather[0].description).slice(1);

  let hilow = document.querySelector('.current .hi-low');
  hilow.innerText = `Min: ${Math.round(weather.main.temp_min)}°C / Max: ${Math.round(weather.main.temp_max)}°C`;

  let clouds = document.querySelector('.current .clouds');
  clouds.innerText = `Zachmurzenie: ${weather.clouds.all}%`;

  let vibi = document.querySelector('.current .vibi');
  vibi.innerText = `Widoczność: ${weather.visibility} m`;

  let humidity = document.querySelector('.current .humidity');
  humidity.innerText = `Wilgotność: ${weather.main.humidity}%`;

  let wind = document.querySelector('.current .wind');
  wind.innerText = `Wiatr: ${weather.wind.speed} km/h`;
  
  let sunrise = document.querySelector('.current .sunrise');
  sunrise.innerText = `Wschód: ${((dateObject.toLocaleString()).slice(12,))}`;

  let sunset = document.querySelector('.current .sunset');
  sunset.innerText = `Zachód: ${((dateObject1.toLocaleString()).slice(12,))}`;


  //Warunki do latania
  let canifly = document.querySelector('.canifly');
  if( weather.main.temp < 6 && weather.main.humidity > 60 ){
    canifly.innerHTML = "Uwaga! Niska temperatura i wysoka wilgotność. Uważaj na Oblodzenia śmigieł.";
  }else if( weather.wind.speed > 30){
    canifly.innerHTML = "Uwaga! Silny wiatr. Uważaj na szybkie porywy wiatru oraz nie lataj gdy wiatr będzie zbyt silny.";
  }else if( weather.main.humidity > 75){
    canifly.innerHTML = "Uwaga! Wysoka wilgotność. Niektóre elementy drona mogą nie działać poprawnie przy dużej wilgotności.";
  }else if (weather.weather[0].main =='Rain'){
    canifly.innerHTML = "Uwaga! Opady deszczu. Nie lataj podczas opadów, może to skutkować zniszczeniem drona.";
  }else if (weather.weather[0].main =='Snow'){
    canifly.innerHTML = "Uwaga! Opady Śniegu. Nie lataj podczas opadów, może to skutkować zniszczeniem drona.";
  }else if (weather.weather[0].main =='Drizzle'){
    canifly.innerHTML = "Uwaga! Mżawka. Nie lataj gdy opady będą zbyt duże.";
  }else if (weather.weather[0].main =='Thunderstorm'){
    canifly.innerHTML = "Uwaga! Burza. Nie lataj podczas opadów, może to skutkować zniszczeniem drona.";
  }else if (weather.weather[0].main =='Mist'){
    canifly.innerHTML = "Uwaga! Silna mgła. Bądź ostrożny podczas latania we mgle oraz nie lataj poza zasięg swojego wzroku.";
  }else{
    canifly.innerHTML = "Dobre warunki do latania.";
  }
}

function dateBuilder (d) {
  let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}