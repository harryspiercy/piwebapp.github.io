const apiKey = "YOUR_API_KEY";
document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("weather").innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerText = error.message;
  }
}
