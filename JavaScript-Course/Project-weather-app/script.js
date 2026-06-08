// Open-Meteo endpoints for geocoding and weather data
const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

// Get references to DOM elements in the HTML
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.querySelector('.weather-info');

// When the search button is clicked, read the input and fetch weather
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Allow pressing Enter inside the input to trigger the search too
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    }
  }
});

// Async function to request location and weather data from Open-Meteo
async function fetchWeather(city) {
  try {
    weatherInfo.innerHTML = '<div class="loading">Loading...</div>';

    // Lookup latitude/longitude for the city name
    const geoResponse = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1`);
    if (!geoResponse.ok) {
      throw new Error('Location lookup failed');
    }

    const geoData = await geoResponse.json();
    const location = geoData.results && geoData.results[0];
    if (!location) {
      throw new Error('City not found');
    }

    const { latitude, longitude, name, country, timezone } = location;

    // Request current weather plus hourly humidity, feels-like, and pressure data
    const weatherResponse = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}` +
      `&current_weather=true&hourly=relativehumidity_2m,apparent_temperature,surface_pressure&timezone=${encodeURIComponent(timezone)}`
    );

    if (!weatherResponse.ok) {
      throw new Error('Weather request failed');
    }

    const weatherData = await weatherResponse.json();
    displayWeather({
      location: { name, country },
      weather: weatherData.current_weather,
      hourly: weatherData.hourly
    });

    cityInput.value = '';
  } catch (error) {
    weatherInfo.innerHTML = `<div class="error">${error.message}</div>`;
  }
}

// Map Open-Meteo weather codes to human-readable labels
function getWeatherDescription(code) {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };
  return descriptions[code] || 'Unknown weather';
}

// Render the weather data into HTML
function displayWeather({ location, weather, hourly }) {
  const { name, country } = location;
  const humidityIndex = hourly.time.indexOf(weather.time);
  const humidity = humidityIndex !== -1 ? hourly.relativehumidity_2m[humidityIndex] : 'N/A';
  const feelsLike = humidityIndex !== -1 ? hourly.apparent_temperature[humidityIndex] : 'N/A';
  const pressure = humidityIndex !== -1 ? hourly.surface_pressure[humidityIndex] : 'N/A';

  weatherInfo.innerHTML = `
    <div class="city-name">${name}, ${country}</div>
    <div class="temperature">${Math.round(weather.temperature)}°C</div>
    <div class="description">${getWeatherDescription(weather.weathercode)}</div>
    <div class="details">
      <div class="detail-item">
        <div class="detail-label">Humidity</div>
        <div class="detail-value">${humidity}%</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Wind Speed</div>
        <div class="detail-value">${weather.windspeed} m/s</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Feels Like</div>
        <div class="detail-value">${Math.round(feelsLike)}°C</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Pressure</div>
        <div class="detail-value">${pressure} hPa</div>
      </div>
    </div>
  `;
}
