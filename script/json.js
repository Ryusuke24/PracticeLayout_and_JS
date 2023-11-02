export { places };

let places = [
  {
    name: "Quiet <br> place",
    countries: [
      {
        name: "Brazil",
        img: "public/img/brazil-.png",
        cities: {
          Rio: { hotels: 45, tours: 5, img: "" },
          "San-Paolo": { hotels: 30, tours: 3 },
          Brazilia: { hotels: 37, tours: 4 },
        },
      },
      {
        name: "Italy",
        img: "public/img/italy.png",
        cities: {
          Rome: { hotels: 110, tours: 17 },
          Milan: { hotels: 75, tours: 11 },
          Venezia: { hotels: 67, tours: 22 },
        },
      },
      {
        name: "France",
        img: "public/img/france.png",
        cities: {
          Paris: { hotels: 119, tours: 19, img: "./public/img/Paris.jpg" },
          Marsel: { hotels: 45, tours: 12 },
          Lion: { hotels: 36, tours: 16 },
        },
      },
    ],
    count: 100,
    link: "./quitePlacePage.html",
  },
  {
    name: "Romantic <br> trip",
    countries: [
      {
        name: "Japan",
        img: "public/img/japan.png",
        cities: {
          Tokio: { hotels: 70, tours: 15 },
          Kioto: { hotels: 40, tours: 20 },
          Osaka: { hotels: 37, tours: 4 },
        },
      },
      {
        name: "USA",
        img: "public/img/united-states.png",
        cities: {
          NY: { hotels: 150, tours: 44 },
          "Los-Angeles": { hotels: 98, tours: 34 },
          "San-Francisco": { hotels: 78, tours: 27 },
        },
      },
      {
        name: "Spain",
        img: "public/img/spain.png",
        cities: {
          Barcelona: { hotels: 86, tours: 33 },
          Madrid: { hotels: 55, tours: 19 },
          Valencia: { hotels: 42, tours: 32 },
        },
      },
    ],
    count: 350,
    link: "./romanticTripPage.html",
  },
  {
    name: "Food <br> trip",
    countries: [
      {
        name: "Hungary",
        img: "public/img/hungary.png",
        cities: {
          Budapest: { hotels: 60, tours: 12 },
          Debrecen: { hotels: 20, tours: 7 },
          Szeged: { hotels: 16, tours: 5 },
        },
      },
      {
        name: "South Korea",
        img: "public/img/south-korea.png",
        cities: {
          Seoul: { hotels: 88, tours: 34 },
          Pusan: { hotels: 76, tours: 27 },
          Degu: { hotels: 45, tours: 12 },
        },
      },
      {
        name: "Italy",
        img: "public/img/italy.png",
        cities: {
          Rome: { hotels: 110, tours: 17 },
          Milan: { hotels: 75, tours: 11 },
          Venezia: { hotels: 67, tours: 22 },
        },
      },
    ],
    count: 350,
    link: "./foodTripPage.html",
  },
];

let quiteCountriesCount = places[0].countries.length;
let romanticCountriesCount = places[1].countries.length;
let foodCountriesCount = places[2].countries.length;

places[0].countriesCount = quiteCountriesCount;
places[1].countriesCount = romanticCountriesCount;
places[2].countriesCount = foodCountriesCount;
