# IP-Address-Tracker
# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses and see the key information and location




### Links

- Solution URL: [Solution](https://github.com/lamba01/IP-Address-Tracker)
- Live Site URL: [Live Site](https://ip-address-tracker-dusky-pi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Fetch Api for two APIs



### What I learned


```js
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
```



### Continued development

I will work on one more project involving APIs and features before moving on to learn React


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@lamba01](https://www.frontendmentor.io/profile/lamba01)
- Twitter - [@lambacodes](https://www.twitter.com/lambacodes)


## Acknowledgments

Thank myself for how far I've gone and haven't given up
