
import config from './config.js';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");




async function checkWeather(city){
    response = await fetch(apiUrl + city + `&appid=${config.apiKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector (".city").innerHTML = data.name;
    document.querySelector (".temperature").innerHTML = Math.round(data.main.temp)  + "°";
    document.querySelector (".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector (".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});








