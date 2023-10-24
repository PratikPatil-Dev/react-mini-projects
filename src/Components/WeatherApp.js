import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lattitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=5b9b093b61d5c39896fdd6d9b9234bc7&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeather(data);
          });
      });
    }
  }, []);

  return (
    <div className="bg-blue-200 p-4">
      <h1 className="text-2xl font-semibold">WeatherApp</h1>
      {weather ? (
        <div>
          <h2 className="text-lg">Current Weather</h2>
          <p className="text-4xl font-bold">{weather?.main?.temp}&deg;C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <div className="text-red-500 font-semibold">
          Unable to get Weather data
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
