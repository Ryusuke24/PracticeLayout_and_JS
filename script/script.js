import places from "./json.js";

let tripDiv = document.querySelector(".quietPlaces");
let foodTrip = document.querySelector(".foodPlaces");
let romanticTrip = document.querySelector(".romanticPlaces");
let rightMobileBtn = document.querySelector(".buttonRight");
let leftMobileBtn = document.querySelector(".buttonLeft");
let link = document.querySelector(".nextPageLink");
let bannerId = 0;

tripDiv.querySelector("h2").innerHTML = places[0].name;
romanticTrip.querySelector("h2").innerHTML = places[1].name;
foodTrip.querySelector("h2").innerHTML = places[2].name;

let tripImg = tripDiv.querySelectorAll("img");
let romanticImg = romanticTrip.querySelectorAll("img");
let foodImg = foodTrip.querySelectorAll("img");

for (let i = 0; i < 3; i++) {
  tripImg[i].src = places[0].countries[i];
  romanticImg[i].src = places[1].countries[i];
  foodImg[i].src = places[2].countries[i];
}

leftMobileBtn.addEventListener("click", () => {
  bannerId--;
  if (bannerId == -1) bannerId = 2;
  tripDiv.querySelector("h2").innerHTML = places[bannerId].name;
  tripDiv.querySelector("p").textContent = places[bannerId].count + "+";
  let imgs = tripDiv.querySelectorAll("img");
  link.href = places[bannerId].link;
  imgs[0].src = places[bannerId].countries[0];
  imgs[1].src = places[bannerId].countries[1];
  imgs[2].src = places[bannerId].countries[2];
});

rightMobileBtn.addEventListener("click", () => {
  bannerId++;
  if (bannerId == 3) bannerId = 0;
  tripDiv.querySelector("h2").innerHTML = places[bannerId].name;
  tripDiv.querySelector("p").textContent = places[bannerId].count + "+";
  let imgs = tripDiv.querySelectorAll("img");
  link.href = places[bannerId].link;
  imgs[0].src = places[bannerId].countries[0];
  imgs[1].src = places[bannerId].countries[1];
  imgs[2].src = places[bannerId].countries[2];
});
