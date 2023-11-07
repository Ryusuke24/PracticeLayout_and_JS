import { places } from "./json.js";

console.log(places.length);
let placeMenu = document.querySelector(".placeMenu");
console.log(screen.width);
let entryScreenWidth = screen.width;

if (entryScreenWidth < 768) {
  createPlaceIcon(placeMenu);
} else {
  createPlaceIcons(placeMenu, places.length);
}

window.addEventListener("resize", e => {
  if (window.innerWidth < 768) {
    createPlaceIcon(placeMenu);
  } else {
    createPlaceIcons(placeMenu, places.length);
  }
});

let rightMobileBtn = document.querySelector(".buttonRight");
let leftMobileBtn = document.querySelector(".buttonLeft");
let bannerId = 0;

leftMobileBtn.addEventListener("click", () => {
  let link = document.querySelector(".nextPageLink");
  let card = document.querySelector(".selectedCard");
  bannerId--;
  if (bannerId == -1) bannerId = places.length - 1;
  changeBanner(card, link);
});

rightMobileBtn.addEventListener("click", () => {
  let link = document.querySelector(".nextPageLink");
  let card = document.querySelector(".selectedCard");
  bannerId++;
  if (bannerId == places.length) bannerId = 0;
  changeBanner(card, link);
});

function createPlaceIcons(elem, count) {
  elem.innerHTML = "";
  for (let i = 0; i < count; i++) {
    let div = document.createElement("div");
    div.innerHTML = `              <a
  href="${places[i].link}"
  class="nextPageLink hidden md:block"
>
  <div
    class="w-52 h-52 bg-black text-white rounded-3xl flex flex-col justify-around pl-6 hover:h-64 hover:bg-white hover:text-black transition-all duration-300"
  >
    <h2 class="text-3xl">
    ${places[i].name}
    </h2>
    <div class="inline-flex items-center justify-center">
      <img
        class="relative w-10 z-10 border-4 border-black rounded-full"
        src="${places[i].countries[0].img}"
        alt=""
      />
      <img
        class="relative w-10 z-20 right-3 border-4 border-black rounded-full"
        src="${places[i].countries[1].img}"
        alt=""
      />
      <img
        class="relative w-10 z-30 right-6 border-4 border-black rounded-full"
        src="${places[i].countries[2].img}"
        alt=""
      />
      <p
        class="relative font-semibold w-5 h-5 flex items-center p-10 z-40 right-9 border-4 border-black rounded-full bg-black text-red-300"
      >
        ${places[i].getCitiesCount()}+
      </p>
    </div>
  </div></a
>`;
    elem.appendChild(div);
  }
}

function createPlaceIcon(elem) {
  let div = document.createElement("div");
  elem.innerHTML = "";
  div.innerHTML = `              <a
  href="${places[0].link}"
  class="nextPageLink md:hidden"
>
  <div
    class="selectedCard w-52 h-52 bg-black text-white rounded-3xl flex flex-col justify-around pl-6 hover:h-64 hover:bg-white hover:text-black transition-all duration-300"
  >
    <h2 class="text-3xl">
    ${places[0].name}
    </h2>
    <div class="inline-flex items-center justify-center">
      <img
        class="relative w-10 z-10 border-4 border-black rounded-full"
        src="${places[0].countries[0].img}"
        alt=""
      />
      <img
        class="relative w-10 z-20 right-3 border-4 border-black rounded-full"
        src="${places[0].countries[1].img}"
        alt=""
      />
      <img
        class="relative w-10 z-30 right-6 border-4 border-black rounded-full"
        src="${places[0].countries[2].img}"
        alt=""
      />
      <p
        class="relative font-semibold w-10 h-10 flex items-center z-40 right-9 border-4 border-black rounded-full bg-black text-red-300"
      >
        ${places[0].getCitiesCount()}+
      </p>
    </div>
  </div></a
>`;
  elem.appendChild(div);
}

function changeBanner(card, link) {
  card.querySelector("h2").innerHTML = places[bannerId].name;
  card.querySelector("p").textContent = places[bannerId].getCitiesCount() + "+";
  let imgs = card.querySelectorAll("img");
  link.href = places[bannerId].link;
  for (let i = 0; i < places[bannerId].countries.length; i++)
    imgs[i].src = places[bannerId].countries[i].img;
}

// let tripDiv = document.querySelector(".quietPlaces");
// let foodTrip = document.querySelector(".foodPlaces");
// let romanticTrip = document.querySelector(".romanticPlaces");

// tripDiv.querySelector("h2").innerHTML = places[0].name;
// romanticTrip.querySelector("h2").innerHTML = places[1].name;
// foodTrip.querySelector("h2").innerHTML = places[2].name;

// let tripImg = tripDiv.querySelectorAll("img");
// let romanticImg = romanticTrip.querySelectorAll("img");
// let foodImg = foodTrip.querySelectorAll("img");

// for (let i = 0; i < 3; i++) {
//   tripImg[i].src = places[0].countries[i].img;
//   romanticImg[i].src = places[1].countries[i].img;
//   foodImg[i].src = places[2].countries[i].img;
// }
