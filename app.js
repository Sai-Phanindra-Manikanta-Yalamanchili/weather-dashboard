// API URL for fetching weather data
const apiUrl = "https://qbp1wen8zf.execute-api.us-east-2.amazonaws.com/weather";

// Function to fetch and display weather data
async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("weatherResult").innerHTML = `<p>Please enter a valid city name.</p>`;
        return;
    }

    document.getElementById("weatherResult").innerHTML = `<p>Loading...</p>`;

    try {
        const response = await fetch(`${apiUrl}?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (!response.ok) {
            document.getElementById("weatherResult").innerHTML = `<p>Error: ${data.error || "Unable to fetch weather data."}</p>`;
            return;
        }

        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
        console.error("Error:", error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const tempC = (data.main.temp - 273.15).toFixed(2) + " °C";
    const tempF = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2) + " °F";

    const todayWeather = `
        <div class="weather-detail">
            <div class="weather-condition">${capitalize(data.weather[0].description)}</div>
            <div class="weather-temperature">${tempF}</div>
        </div>
        <div class="weather-stats">
            <div class="stat">High: ${tempF} | Low: ${tempF}</div>
            <div class="stat">Condition: ${capitalize(data.weather[0].description)}</div>
        </div>
    `;

    const currentWeather = `
        <div class="weather-detail">
            <div>
                <p class="weather-condition">${data.name}</p>
                <p>${tempC}</p>
            </div>
            <div>
                <p>${data.main.humidity}% Humidity</p>
                <p>${data.wind.speed} m/s Wind Speed</p>
            </div>
        </div>
    `;

    document.getElementById("weatherResult").innerHTML = `
        <div class="weather-section">
            <div class="section-title">Today's Weather</div>
            ${todayWeather}
        </div>
        <div class="weather-section">
            <div class="section-title">Current Weather</div>
            ${currentWeather}
        </div>
    `;
}

// Utility function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
