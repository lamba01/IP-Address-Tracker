

// API key from https://geo.ipify.org
const apiKey = 'at_ACAZL6otukqccjfgRJCHOKwLz1huZ';

// Function to create and display the map using Leaflet.js
function createMap(lat, lng) {
  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  return map;
}

// Fetch the user's IP address and location details
fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const { lat, lng } = data.location;
    const ipAddress = data.ip;

    // Display the IP address
    document.getElementById('ip-address').textContent = `IP Address: ${ipAddress}`;

    // Create and display the map
    const map = createMap(lat, lng);

    // Add a marker to the map
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`Location: ${data.location.city}, ${data.location.country}`)
      .openPopup();
  });




// const apiKey = 'at_ACAZL6otukqccjfgRJCHOKwLz1huZ';

// // Function to fetch location details using IP address
// function fetchLocation(ipAddress) {
//   fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`)
//     .then(response => response.json())
//     .then(data => {
//       const { lat, lng } = data.location;

//       // Create and display the map using Leaflet.js
//       const map = L.map('map').setView([lat, lng], 13);

//       // Add the tile layer
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//       }).addTo(map);

//       // Add a marker to the map
//       L.marker([lat, lng]).addTo(map)
//         .bindPopup(`Location: ${data.location.city}, ${data.location.country}`)
//         .openPopup();
//     });
// }

// // Fetch the user's IP address
// fetch('https://api.ipify.org?format=json')
//   .then(response => response.json())
//   .then(data => {
//     const ipAddress = data.ip;
//     document.getElementById('ip-address').textContent = `IP Address: ${ipAddress}`;
//     fetchLocation(ipAddress);
//   });
