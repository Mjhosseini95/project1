const apiKey = "08f2907433175c2101d746f650662938"; // Replace with your OpenWeatherMap API key

// Function to fetch weather data based on coordinates
function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-data').innerHTML = 'Weather data unavailable';
        });
}

// Function to display weather information
function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    
    document.getElementById('weather-data').innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Conditions: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
    `;
}

// Call fetchWeather function when a water resource is clicked
function onResourceClick(lat, lon) {
    fetchWeather(lat, lon);
}
