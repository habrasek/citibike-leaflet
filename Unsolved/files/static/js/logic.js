// var newYorkCoords = [0.73, -74.0059];4

// var mapZoomLevel = 12;

let url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
// Create the createMap function.
let response = d3.json(url);

console.log(response);

function createMap(bikeLayer){

  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let baseMaps = {
    "Street Map":streetmap
  }

  let overlayMaps = {
    "Bike Stations":bikeLayer
  }

  let map = L.map("map-id", {
    center : [40.73, -74],
    zoom:12,
    layers: [streetmap, bikeLayer]
  })

  L.control(baseMaps, overlayMaps, {
    collapsed:false
  }).addTo(map)

};





  // Create the tile layer that will be the background of our map.
function createMarkers(response){
  let stations = response.data.stations;
  console.log(stations);

  
  let bikeMarkers = [];

  stations.forEach(station =>{
    let bikeMarker = L.marker([station.lat, station.lon])
    .bindPopup(`Station Name: ${station.name}`)

    bikeMarkers.push(bikeMarker);
  })

  let bikeLayer = L.layerGroup(bikeMarkers);

  createMap(bikeLayer);
};

  // Create a baseMaps object to hold the lightmap layer.

d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
