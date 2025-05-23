import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "5aeb64c73aaf49a981e140127251305"; // 🔁 Substitua pela sua chave da WeatherAPI

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip&lang=pt`
        );
        setWeather(response.data);
      } catch (err) {
        setError("Erro ao buscar dados do tempo.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weather">Carregando...</div>;
  if (error) return <div className="weather">{error}</div>;
  if (!weather) return null;

  return (
    <div className="weather">
      <img src={weather.current.condition.icon} alt="Ícone do clima" />
      <div className="weather-info">
        <p className="weather-temp">{weather.current.temp_c}°C</p>

        <p className="weather-locate">{weather.location.name}</p>
      </div>
    </div>
  );
};

export default Weather;
