async function fetchWeather(city) {
  const apiKey = "9375c23dce324a9e99b125308241211";
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&lang=en`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados do clima:", error);
    return null;
  }
}
