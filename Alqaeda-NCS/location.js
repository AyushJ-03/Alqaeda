document.addEventListener('DOMContentLoaded', () => {
  // Initialize Leaflet map
  const map = L.map('map').setView([28.613216,77.359459], 15); // Default location: Delhi

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a default marker to the map
  const marker = L.marker([28.613216,77.359459]).addTo(map);
  marker.bindPopup('<b>Default Location</b><br>Delhi, India.').openPopup();

  // Event for "Search" button
  document.getElementById('searchButton').addEventListener('click', () => {
      const searchInput = document.getElementById('searchInput').value;
      if (searchInput) {
          alert(`Search functionality for '${searchInput}' is under development.`);
      } else {
          alert('Please enter a name to search.');
      }
  });
});
