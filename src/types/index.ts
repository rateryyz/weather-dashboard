export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: Array<{
      day: {
        avgtemp_c: number;
      };
    }>;
  };
}

export interface ForecastItemProps {
  temp: number;
  day: string;
  isToday?: boolean;
}

export interface CityCardProps {
  name: string;
  temp: string;
  condition: string;
}