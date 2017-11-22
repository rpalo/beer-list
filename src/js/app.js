var beers = [
  { name: "8-Ball Stout", year: 1997 },
  { name: "Affliger X-mas Ale", year: 2004 },
  { name: "Alaska Smoked Porter", year: 2002 },
  { name: "Alesmith Anvil", year: 2004 }
];

var app = new Vue({
  el: "#app",
  data: {
    beers
  }
});