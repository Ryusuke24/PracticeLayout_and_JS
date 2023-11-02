import { places } from "./json.js";

let menu = document.querySelector(".menu");

menu.innerHTML = `<a class="" href="#">
<div class="placeCard">
  <img
    class="w-32 border-2 border-white rounded-t-full"
    src="${places[0].countries[2].cities.Paris.img}"
    alt=""
  />
  <img
    class="w-8 h-8 self-center bottom-4 border-2 rounded-full border-whire relative"
    src="./public/img/france.png"
    alt=""
  />
  <h2 class="font-semibold self-center text-3xl">Paris</h2>
  <ul class="inline-flex gap-2 text-sm self-center">
    <li><img src="" alt="" /> 52 hotels</li>
    <li><img src="" alt="" />3 tours</li>
  </ul>
</div>
</a>`;

console.log(places[0].countriesCount);
