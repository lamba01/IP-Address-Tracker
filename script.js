

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
    document.getElementById('ip-address').innerHTML = ` ${ipAddress}`;

    // Create and display the map
    const map = createMap(lat, lng);

    // Add a marker to the map
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`Location: ${data.location.city}, ${data.location.country}`)
      .openPopup();
  });

// Function to fetch ISP, and timezone information
function fetchIPDetails() {
  return fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const isp = data.isp;
      const location = data.location.city
      const timezone = data.location.timezone;

      return { isp, location, timezone };
    });
}

// To display on the webpage
fetchIPDetails()
  .then(details => {
    const { isp, location, timezone } = details;
    document.getElementById('isp').innerHTML = isp
    document.getElementById('timezone').innerHTML = timezone
    document.getElementById('location').innerHTML = location
  })
  .catch(error => {
    console.log('Error:', error);
  });



