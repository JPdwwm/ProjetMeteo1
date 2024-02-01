import { config } from './config.js';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function checkWeather(city) {
    fetch(config.apiUrl + city + `&appid=${config.apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".weather").style.display = "block";
        }
    )
    .catch(error => {
        console.error("Erreur lors de la récupération des données météorologiques :", error);
    });
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});









