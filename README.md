# Water Resource Management WebGIS

This project is a WebGIS application focused on water resource management. It provides an interactive map to visualize water quality data, usage statistics, and watershed boundaries.

## Features

- Interactive map with different data layers
- Dropdown selection for viewing different water resources
- Popup information for each water resource
- Placeholder for real-time data fetching and analysis tools

## Setup

1. Clone the repository.
2. Open `index.html` in a web browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- Leaflet.js
- OpenStreetMap
- GeoJSON

## Data Sources

Data for this project is represented in GeoJSON format and can be customized based on available datasets related to water resources.


## Weather API Integration

This project includes a weather API integration using [OpenWeatherMap](https://openweathermap.org/). The current weather data is fetched based on the selected water resource's location and displayed on the map.

### API Key Setup

To use the weather features, you must obtain an API key from OpenWeatherMap and replace `YOUR_API_KEY` in the `weather.js` file.
