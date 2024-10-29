// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 10); // San Francisco coordinates

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to clear previous layers
function clearLayers() {
    map.eachLayer((layer) => {
        if (layer instanceof L.GeoJSON) {
            map.removeLayer(layer);
        }
    });
}

// Event listener for resource selection
document.getElementById('resource-select').addEventListener('change', function() {
    var resource = this.value;
    clearLayers();
    loadWaterData(resource);
});

// Load water resource data based on selection
function loadWaterData(resource) {
    switch (resource) {
        case 'waterQuality':
            loadGeoJSON('data/water_quality.geojson');
            break;
        case 'usage':
            loadGeoJSON('data/usage_data.geojson');
            break;
        case 'watersheds':
            loadGeoJSON('data/watersheds.geojson');
            break;
    }
}

// Load GeoJSON data into the map
function loadGeoJSON(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.name || "Water Resource");
                    layer.on('click', function() {
                        const coords = layer.getLatLng();
                        onResourceClick(coords.lat, coords.lng); // Fetch weather data
                    });
                }
            }).addTo(map);
        })
        .catch(error => console.error('Error loading GeoJSON data:', error));
}

