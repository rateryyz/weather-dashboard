import { WeatherData } from '../types';

const API_KEY = "9375c23dce324a9e99b125308241211";

export async function fetchWeather(city: string): Promise<WeatherData | null> {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=en`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}