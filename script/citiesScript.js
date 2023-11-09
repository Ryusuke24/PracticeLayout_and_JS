//import json file, but real prog will fetch this data
import { places } from "./json.js";

//to know city and country name and change page for they
let pagePath = window.location.href.split("/");
let pageName = pagePath[pagePath.length - 1].split(".")[0].split("_");

let cityName = pageName[1];
document.title = cityName;
document.querySelector(".cityName").textContent = cityName;

let countryName = pageName[0];
document.querySelector(".countryName").textContent = countryName;

document.querySelector(".countryFlag").src =
  "/PracticeLayout_and_JS/" + searchByName(countryName, places).img;

document.querySelector(".countryBanner").classList.add(countryName);

document.querySelector(".price").innerHTML = `${
  searchByName(cityName, places).info.cheapestHotel
}`;

document.querySelector(".backLink").addEventListener("click", () => {
  window.history.back();
});

//API init and create URL with needed city
const API_KEY = "8ff2db571304445694971738230811";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

//init months and weekdays
let week = ["Sun", "Mo", "Tue", "Wed", "Thu", "Fri", "Sat"];
let month = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

//to know now Date
let date = new Date();
let nowDay = week[date.getDay()];
let numDay = date.getDate();
let monthWord = month[date.getMonth()];

let dateBlock = document.querySelector(".date");
let conditionBlock = document.querySelector(".condition");
let tempBlock = document.querySelector(".temp");

let weather = await getWeather();
console.log(weather);

tempBlock.textContent = weather.current["feelslike_c"];
dateBlock.textContent = `${nowDay}, ${numDay} ${monthWord}`;

if (weather.current.condition.text == "Sunny") {
  conditionBlock.innerHTML = `<svg viewBox="0 0 24 24" fill="none" class="w-8" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> 
  <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
  </g>
  </svg>`;
}

async function getWeather() {
  let response = await fetch(URL);
  let json = await response.json();
  return json;
}

//recursion searching func
function searchByName(name, obj) {
  for (let elem of obj) {
    if (elem.name == name) {
      return elem;
    } else {
      for (let sub in elem) {
        if (Array.isArray(elem[sub])) {
          let result = searchByName(name, elem[sub]);
          if (result) {
            return result;
          }
        }
      }
    }
  }
}
