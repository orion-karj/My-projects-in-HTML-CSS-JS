const input = document.getElementById('input');
const btn = document.getElementById('btn');
document.querySelector

const apiKey = "5f9992abfe5262031abfcdf71b75f2a3";

async function saveInputValue() {

    card.style.display = "block";
    let value = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
    }
    const weather = await response.json();
    console.log(weather)

    displayWeatherInfp(weather);
} catch (error) {
    console.error(error.message);
  }
}

function displayWeatherInfp(data) {
    
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id }]} = data;

    card.textContent = "";
    card.style.display = "flex";
    
    const nameDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("h2");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("h2");

    nameDisplay.classList.add('name');
    tempDisplay.classList.add('temp');
    humidityDisplay.classList.add('humidity');
    descDisplay.classList.add('desc');
    emojiDisplay.classList.add("emoji");

    nameDisplay.textContent = city;
    tempDisplay.textContent  = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = "" + getEmojiId(id);

    card.appendChild(nameDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay);

}

function getEmojiId(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️"
            break;
        case weatherId >= 300 && weatherId < 400:
            "💧"
            break;
        case weatherId >= 500 && weatherId < 600:
            return "🌧️"
            break;
        case weatherId >= 600 && weatherId < 700:
            return "🌨️"
            break;
        case weatherId >= 700 && weatherId < 800:
            return "🌫️"
            break;
        case weatherId === 800:
            return "☀️"
            break;
        case weatherId > 800:
            return "⛅"
            break;
        default:
           return "❓"     
            break;
    }
}