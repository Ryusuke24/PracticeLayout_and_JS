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
console.log(count);
menu.innerHTML = "";

for (let i = 0; i < count; i++) {
  let cities = places[currentCard_Id].countries[i].getCitiesInCountry();
  console.log(cities);
  for (let j = 0; j < cities; j++) {
    menu.innerHTML += `<a class="card" href="#" data-mount="${places[currentCard_Id].countries[i].cities[j].info.isMount}" data-sea="${places[currentCard_Id].countries[i].cities[j].info.isSea}" data-attr="${places[currentCard_Id].countries[i].cities[j].info.isAttractions}">
    <div class="placeCard ">
      <img
        class="h-16 w-32 object-cover border-2 border-white rounded-t-full"
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
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    if (card.dataset.mount != "true") {
      card.style.display = "none";
    }
  }

  let buttons = document.querySelectorAll("button");
  buttons[0].classList.remove("activeFilterBtn");
  buttons[0].classList.add("filterBtn");
  bnt_Mount.classList.remove("filterBtn");
  bnt_Mount.classList.add("activeFilterBtn");
});

let bnt_Sea = document.querySelector(".button_sea");
bnt_Sea.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    if (card.dataset.sea != "true") {
      card.style.display = "none";
    }
  }
  let buttons = document.querySelectorAll("button");
  buttons[0].classList.remove("activeFilterBtn");
  buttons[0].classList.add("filterBtn");
  bnt_Sea.classList.remove("filterBtn");
  bnt_Sea.classList.add("activeFilterBtn");
});

let bnt_Attr = document.querySelector(".button_attr");
bnt_Attr.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    if (card.dataset.attr != "true") {
      card.style.display = "none";
    }
  }
  let buttons = document.querySelectorAll("button");
  buttons[0].classList.remove("activeFilterBtn");
  buttons[0].classList.add("filterBtn");
  bnt_Attr.classList.remove("filterBtn");
  bnt_Attr.classList.add("activeFilterBtn");
});
