use solarSystem;
db.dropDatabase();

db.planets.insertMany([
  {
    name: "Mercury",
    diameter: "4,879 km",
    distantFromSun: "57.91 million km",
    numberOfMoons: 0,
    lengthOfAYear: "88 days",
    mass: "0.055 x Earth",
    image: "/images/mercury.png"
  },
  {
    name: "Venus",
    diameter: "12,100 km",
    distantFromSun: '108.2 million km',
    numberOfMoons: 0,
    lengthOfAYear: "225 days",
    mass: "0.815 x Earth",
    image: "/images/venus.png"
  },
  {
    name: "Earth",
    diameter: "12,755 km",
    distantFromSun: "149.6 million km",
    numberOfMoons: 1,
    lengthOfAYear: "365 days",
    mass: "1 x Earth",
    image: "/images/earth.png"
  },
  {
    name: "Mars",
    diameter: "6,786 km",
    distantFromSun: "227.9 million km",
    numberOfMoons: 2,
    lengthOfAYear: "687 days",
    mass: "0.107 x Earth",
    image: "/images/mars.png"
  },
  {
    name: "Jupiter",
    diameter: "142,800 km",
    distantFromSun: "778.5 million km",
    numberOfMoons: 79,
    lengthOfAYear: "Almost 12 Earth years",
    mass: "317.83 x Earth",
    image: "/images/jupiter.png"
  },
  {
    name: "Saturn",
    diameter: "120,537 km",
    distantFromSun: "1.435 billion km",
    numberOfMoons: 56,
    lengthOfAYear: "29.5 Earth years",
    mass: "95.16 x Earth",
    image: "/images/saturn.png"
  },
  {
    name: "Uranus",
    diameter: "51,819 km",
    distantFromSun: "2.871 billion km",
    numberOfMoons: 21,
    lengthOfAYear: "84 Earth years",
    mass: "14.536 x Earth",
    image: "/images/uranus.png"
  },
  {
    name: "Neptune",
    diameter: "49,529 km",
    distantFromSun: "4.495 billion km",
    numberOfMoons: 13,
    lengthOfAYear: "About 165 Earth years.",
    mass: "17.15 x Earth",
    image: "/images/neptune.png"
  }
]);
