export { places };

let places = [
  {
    name: "Quiet <br> place",
    countries: [
      {
        name: "Brazil",
        img: "public/img/brazil-.png",
        cities: [
          {
            name: "Rio",
            info: {
              hotels: 45,
              tours: 5,
              img: "./public/img/Rio.jpg",
              isSea: true,
              isMount: true,
              isAttractions: true,
              cheapestHotel: "$600",
            },
          },
          {
            name: "San-Paulo",
            info: {
              hotels: 37,
              tours: 3,
              img: "./public/img/San-Paulo.jpg",
              isSea: true,
              isMount: true,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Brazilia",
            info: {
              hotels: 41,
              tours: 7,
              img: "./public/img/Brazilia.jpg",
              isSea: true,
              isMount: true,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "England",
        img: "public/img/england.png",
        cities: [
          {
            name: "London",
            info: {
              hotels: 105,
              tours: 22,
              img: "./public/img/London.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$750",
            },
          },
          {
            name: "Manchester",
            info: {
              hotels: 65,
              tours: 16,
              img: "./public/img/Manchester.jpg",
              isSea: true,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$660",
            },
          },
          {
            name: "Liverpool",
            info: {
              hotels: 37,
              tours: 11,
              img: "./public/img/Liverpool.jpg",
              isSea: true,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$450",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "Italy",
        img: "public/img/italy.png",
        cities: [
          {
            name: "Rome",
            info: {
              hotels: 110,
              tours: 17,
              img: "./public/img/Rome.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$450",
            },
          },
          {
            name: "Milan",
            info: {
              hotels: 75,
              tours: 11,
              img: "./public/img/Milan.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$700",
            },
          },
          {
            name: "Venezia",
            info: {
              hotels: 67,
              tours: 22,
              img: "./public/img/Venezia.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$660",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "France",
        img: "public/img/france.png",
        cities: [
          {
            name: "Paris",
            info: {
              hotels: 119,
              tours: 19,
              img: "./public/img/Paris.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$900",
            },
          },
          {
            name: "Marsel",
            info: {
              hotels: 45,
              tours: 12,
              img: "./public/img/Marsel.gif",
              isSea: true,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$760",
            },
          },
          {
            name: "Lion",
            info: {
              hotels: 36,
              tours: 16,
              img: "./public/img/Lion.jpg",
              isSea: false,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$560",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
    ],
    count: 100,
    link: "./quitePlacePage.html",
    countyLength() {
      return this.countries.length;
    },
    getCitiesCount() {
      let sum = 0;
      for (let country of this.countries) {
        sum += Object.keys(country.cities).length;
      }
      return sum;
    },
  },
  {
    name: "Romantic <br> trip",
    countries: [
      {
        name: "Japan",
        img: "public/img/japan.png",
        cities: [
          {
            name: "Tokio",
            info: {
              hotels: 70,
              tours: 15,
              img: "./public/img/Tokio.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$600",
            },
          },
          {
            name: "Kioto",
            info: {
              hotels: 40,
              tours: 20,
              img: "./public/img/Kioto.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$570",
            },
          },
          {
            name: "Osaka",
            info: {
              hotels: 37,
              tours: 4,
              img: "./public/img/Osaka.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$435",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "USA",
        img: "public/img/united-states.png",
        cities: [
          {
            name: "NY",
            info: {
              hotels: 150,
              tours: 44,
              img: "./public/img/NY.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$700",
            },
          },
          {
            name: "LA",
            info: {
              hotels: 98,
              tours: 34,
              img: "./public/img/LA.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "SF",
            info: {
              hotels: 78,
              tours: 27,
              img: "./public/img/SF.jpg",
              isSea: true,
              isMount: true,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "Spain",
        img: "public/img/spain.png",
        cities: [
          {
            name: "Barcelona",
            info: {
              hotels: 86,
              tours: 33,
              img: "./public/img/Barcelona.jpg",
              isSea: true,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Madrid",
            info: {
              hotels: 55,
              tours: 19,
              img: "./public/img/Madrid.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Valencia",
            info: {
              hotels: 42,
              tours: 32,
              img: "./public/img/Valencia.jpg",
              isSea: false,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
    ],
    count: 350,
    link: "./romanticTripPage.html",
    countyLength() {
      return this.countries.length;
    },
    getCitiesCount() {
      let sum = 0;
      for (let country of this.countries) {
        sum += Object.keys(country.cities).length;
      }
      return sum;
    },
  },
  {
    name: "Food <br> trip",
    countries: [
      {
        name: "Hungary",
        img: "public/img/hungary.png",
        cities: [
          {
            name: "Budapest",
            info: {
              hotels: 60,
              tours: 12,
              img: "./public/img/Budapest.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Debrecen",
            info: {
              hotels: 20,
              tours: 7,
              img: "./public/img/Debrecen.jpg",
              isSea: false,
              isMount: true,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Szeged",
            info: {
              hotels: 16,
              tours: 5,
              img: "./public/img/Szeged.jpg",
              isSea: false,
              isMount: false,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "SouthKorea",
        img: "public/img/south-korea.png",
        cities: [
          {
            name: "Seoul",
            info: {
              hotels: 88,
              tours: 34,
              img: "./public/img/Seoul.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Pusan",
            info: {
              hotels: 76,
              tours: 27,
              img: "./public/img/Pusan.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Degu",
            info: {
              hotels: 45,
              tours: 12,
              img: "./public/img/San-Paulo.jpg",
              isSea: false,
              isMount: true,
              isAttractions: false,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
      {
        name: "Italy",
        img: "public/img/italy.png",
        cities: [
          {
            name: "Rome",
            info: {
              hotels: 110,
              tours: 17,
              img: "./public/img/Rome.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Milan",
            info: {
              hotels: 75,
              tours: 11,
              img: "./public/img/Milan.jpg",
              isSea: false,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
          {
            name: "Venezia",
            info: {
              hotels: 67,
              tours: 22,
              img: "./public/img/Venezia.jpg",
              isSea: true,
              isMount: false,
              isAttractions: true,
              cheapestHotel: "$400",
            },
          },
        ],
        getCitiesInCountry() {
          return this.cities.length;
        },
      },
    ],
    count: 350,
    link: "./foodTripPage.html",
    countyLength() {
      return this.countries.length;
    },
    getCitiesCount() {
      let sum = 0;
      for (let country of this.countries) {
        sum += Object.keys(country.cities).length;
      }
      return sum;
    },
  },
];
