var beers = [
  // { name: "8-Ball Stout", year: 1997 },
  // { name: "Affliger X-mas Ale", year: 2004 },
  // { name: "Alaska Smoked Porter", year: 2002 },
  // { name: "Alesmith Anvil", year: 2004 }
];

var app = new Vue({
  el: "#app",
  data: {
    beers: beers,
    search: ""
  },
  computed: {
    filteredBeers() {
      return this.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
});

var req = new XMLHttpRequest();
var url = "https://cdn.contentful.com/spaces/rw3uot0g1yaa/entries?access_token=fb12d7b8783b59ad5630868bcb5e5e2bb56a632c89790be58bd21fc92b08198e&include=2"

req.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var response = JSON.parse(this.responseText);
    console.log(response);
    response.items.forEach( function(item) {
      var beer = {name: item.fields.name, year: item.fields.year};
      if (item.fields.image) {
        beer.image = "https:" + response.includes.Asset.find(function(asset) {
          return asset.sys.id === item.fields.image.sys.id;
        }).fields.file.url;
      }
      beers.push(beer);
    });
  }
};

req.open("GET", url, true);
req.send();
