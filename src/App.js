import "./App.css";
import Sidebar from "./Components/Sidebar";
import SunriseSunset from "./Components/SunriseSunset";
import Wind from "./Components/Wind";
import WeeklyForecast from "./Components/WeeklyForecast";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ExtendedCast from "./Components/ExtendedCast";

function App() {
  getLocation();
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [tempData, setTempData] = useState([]);
  const [error, setError] = useState(null);

  function getLocation() {
    if ("geolocation" in navigator) {
    } else {
      return setError("No geolocation available");
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }
  async function getData() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,uv_index_max,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTempData(data);
    } catch (err) {
      setError(err);
    }
  }

  //getLocation runs upon mounting
  useEffect(() => {
    getLocation();
  }, []);

  //getData runs upon receiving latitude and longitude
  useEffect(() => {
    if (lat && long) {
      getData();
    }
  }, [lat, long]);

  return tempData ? (
    <div className="App">
      {error && <h1 className="Error">Could not load your weather data.</h1>}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar weatherData={tempData} /> <Wind weatherData={tempData} />{" "}
              <SunriseSunset weatherData={tempData} />{" "}
              <WeeklyForecast weatherData={tempData} />
            </>
          }
        />
        <Route
          path="/weekly"
          element={<ExtendedCast weatherData={tempData} />}
        />
      </Routes>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
