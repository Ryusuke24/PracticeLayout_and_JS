//import json file, but real prog will fetch this data
import { places } from "./json.js";

//initialization
let menu = document.querySelector(".menu");
let cardName = document.querySelector(".cardName");
let currentCard_Id = "";

// find out what index the element has
for (let elem of places) {
  if (cardName.textContent.trim() == elem.name.split(" <br> ").join(" ")) {
    currentCard_Id = places.indexOf(elem);
  }
}

// create cards of tematic cities
let count = places[currentCard_Id].countries.length;
menu.innerHTML = "";

for (let i = 0; i < count; i++) {
  let cities = places[currentCard_Id].countries[i].getCitiesInCountry();
  for (let j = 0; j < cities; j++) {
    menu.innerHTML += `<a class="card" 
    href="./cities/${places[currentCard_Id].countries[i].name}_${places[currentCard_Id].countries[i].cities[j].name}.html" 
    data-mount="${places[currentCard_Id].countries[i].cities[j].info.isMount}" 
    data-sea="${places[currentCard_Id].countries[i].cities[j].info.isSea}" 
    data-attr="${places[currentCard_Id].countries[i].cities[j].info.isAttractions}">
    <div class="placeCard flex justify-center items-center">
      <img
        class="h-16 w-32 object-cover  border-2 border-white rounded-t-full"
        src="${places[currentCard_Id].countries[i].cities[j].info.img}"
        alt=""
      />
      <img
        class="w-8 h-8 self-center bottom-4 border-2 rounded-full border-white relative"
        src="${places[currentCard_Id].countries[i].img}"
        alt=""
      />
      <h2 class="font-semibold self-center text-3xl">${places[currentCard_Id].countries[i].cities[j].name}</h2>
      <ul class="inline-flex gap-2 text-sm self-center">
        <li><img src="" alt="" />${places[currentCard_Id].countries[i].cities[j].info.hotels} hotels</li>
        <li><img src="" alt="" />${places[currentCard_Id].countries[i].cities[j].info.tours} tours</li>
      </ul>
    </div>
    </a>`;
  }
}

//filter buttons
//button All
let bnt_All = document.querySelector(".button_all");
bnt_All.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    card.style.display = "block";
  }

  let buttons = document.querySelectorAll("button");
  for (let button of buttons) {
    button.classList.remove("activeFilterBtn");
    button.classList.add("filterBtn");
  }
  bnt_All.classList.remove("filterBtn");
  bnt_All.classList.add("activeFilterBtn");
});

let bnt_Mount = document.querySelector(".button_mount");
bnt_Mount.addEventListener("click", () => {
  filterBy("mount");
  addActiveStyle(bnt_Mount);
});

let bnt_Sea = document.querySelector(".button_sea");
bnt_Sea.addEventListener("click", () => {
  filterBy("sea");
  addActiveStyle(bnt_Sea);
});

let bnt_Attr = document.querySelector(".button_attr");
bnt_Attr.addEventListener("click", () => {
  filterBy("attr");
  addActiveStyle(bnt_Attr);
});

function clearActiveStyle(elem) {
  elem.classList.remove("activeFilterBtn");
  elem.classList.add("filterBtn");
}

function addActiveStyle(elem) {
  clearActiveStyle(bnt_All);
  elem.classList.remove("filterBtn");
  elem.classList.add("activeFilterBtn");
}

function filterBy(filterElem) {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    if (card.dataset[filterElem] != "true") {
      card.style.display = "none";
    }
  }
}
