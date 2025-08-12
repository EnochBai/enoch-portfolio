import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface ForecastResponse {
  city: { name: string };
  list: ForecastItem[];
}

const cities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
];

function WeatherApp() {
  const [city, setCity] = useState<string>("Brisbane");
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [error, setError] = useState<string>("");

  const API_KEY = import.meta.env.VITE_WEATHER_API;

  const fetchForecast = async (selectedCity: string) => {
    try {
      setError("");
      const res = await axios.get<ForecastResponse>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric`
      );

      const dailyData = res.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyData.slice(0, 5));
    } catch {
      setError(
        "Weather information cannot be retrieved at this time. Please try again later."
      );
      setForecast([]);
    }
  };

  useEffect(() => {
    fetchForecast(city);
  }, [city]);

  return (
    <div className="flex flex-col items-center justify-center pt-12 px-4 max-w-4xl mx-auto">
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl font-bold pb-6">Weather Forecast</h1>
      </Fade>

      <Fade direction="left" triggerOnce>
        <div className="mb-6 flex items-center gap-2">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded-md"
          >
            {cities.map((c) => (
              <option key={c} value={c} className="bg-gray-800 text-white">
                {c}
              </option>
            ))}
          </select>
        </div>
      </Fade>
      
      <Fade direction="up" triggerOnce={true}>{error && <p className="text-red-600 mb-4">{error}</p>}</Fade>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-[1000px] mx-auto">
        {forecast.map((day, index) => (
          <Fade
            key={day.dt_txt}
            direction="up"
            cascade={false}
            delay={index * 200}
            triggerOnce={true}
          >
            <div className="bg-slate-600 rounded-lg shadow p-4 flex flex-col items-center justify-between text-white h-[250px] w-full">
              <p className="font-semibold mb-2">
                {new Date(day.dt_txt).toLocaleDateString()}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="w-16 h-16 object-contain"
              />
              <p className="text-lg font-medium">
                {Math.round(day.main.temp)}°C
              </p>
              <p className="truncate max-w-[120px] text-center">
                {day.weather[0].description}
              </p>
              <p className="text-sm text-gray-300">
                humidity: {day.main.humidity}%
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default WeatherApp;
