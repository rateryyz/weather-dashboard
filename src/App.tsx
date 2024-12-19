import React from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from './components/SearchBar';
import { WeatherInfo } from './components/WeatherInfo';
import { ForecastItem } from './components/ForecastItem';
import { CityCard } from './components/CityCard';
import { fetchWeather } from './api/weatherApi';
import { WeatherData } from './types';
import { getRandomCities } from './utils/cities';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DEFAULT_CITY = 'Oklahoma';
const RANDOM_CITIES_COUNT = 3;

function App() {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);
  const [famousCitiesData, setFamousCitiesData] = React.useState<WeatherData[]>([]);
  const [randomCities] = React.useState(() => getRandomCities(RANDOM_CITIES_COUNT));

  const loadWeather = async (city: string) => {
    const data = await fetchWeather(city);
    if (data) setWeatherData(data);
  };

  const loadRandomCitiesWeather = async () => {
    const promises = randomCities.map(city => fetchWeather(city));
    const results = await Promise.all(promises);
    setFamousCitiesData(results.filter((data): data is WeatherData => data !== null));
  };

  React.useEffect(() => {
    loadWeather(DEFAULT_CITY);
    loadRandomCitiesWeather();
  }, []);

  if (!weatherData) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <SearchBar onSearch={loadWeather} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <WeatherInfo data={weatherData} />

          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {weatherData.forecast.forecastday.slice(0, 4).map((forecast, index) => (
                <ForecastItem
                  key={index}
                  temp={forecast.day.avgtemp_c}
                  day={DAYS[(new Date().getDay() + index) % 7]}
                  isToday={index === 0}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {famousCitiesData.map((city, index) => (
                <CityCard
                  key={index}
                  name={city.location.name}
                  temp={`${city.current.temp_c}°`}
                  condition={city.current.condition.text}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;