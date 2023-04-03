import LiveClock from "react-live-clock";

const Sidebar = ({ weatherData }) => {
  let today = new Date();
  let day = today.getDay();
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //defines weathercode:
  let weatherCodeHashmap = new Map([
    [0, "Clear"],
    [1, "Partly Cloudy"],
    [2, "Partly Cloudy"],
    [3, "Partly Cloudy"],
    [45, "Foggy"],
    [48, "Foggy"],
    [51, "Drizzle"],
    [53, "Drizzle"],
    [55, "Drizzle"],
    [56, "Freezing Drizzle"],
    [57, "Freezing Drizzle"],
    [61, "Rain"],
    [63, "Rain"],
    [66, "Rain"],
    [66, "Freezing Rain"],
    [67, "Freezing Rain"],
    [71, "Snow"],
    [73, "Snow"],
    [75, "Snow"],
    [77, "Snow Grain"],
    [80, "Rain Showers"],
    [81, "Rain Showers"],
    [82, "Rain Showers"],
    [85, "Snow Showers"],
    [86, "Snow Showers"],
    [95, "Thunderstorms with Hail"],
    [96, "Thunderstorms with Hail"],
    [99, "Thunderstorms with Hail"],
  ]);
  //waits for weather data from location:
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  if (
    weatherData &&
    weatherData.current_weather &&
    weatherData.hourly &&
    weatherData.daily
  ) {
    return (
      <div className="sidebar-div">
        <div className="sidebar">
          <div className="date">
            <div className="today">
              <div className="">{dayList[day]}</div>
              <LiveClock
                className="live-clock"
                format={"h:mma"}
                ticking={true}
              />
            </div>
          </div>
          <div className="condition">
            <div className="">
              {weatherCodeHashmap.get(weatherData.current_weather.weathercode)}
            </div>
          </div>
            <div className="curr-temp-div">
              <span className="curr-temp-title">Current Temperature</span> <br />
              <span className="curr-temp-int">{weatherData.current_weather.temperature}°F</span>
          </div>
          <div className="feelsLike">
                <span className="feels-like-title">Feels Like</span>
               <span className="feels-like-int">{weatherData.hourly.apparent_temperature[0]}°F</span>
          </div>
          <div className="maxAndMinTemp">
              <span className="">
                High: {weatherData.daily.temperature_2m_max[0]}°F{" "}
              </span>
              <br />
              <span className="">
                Low: {weatherData.daily.temperature_2m_min[0]}°F
              </span>
              <button>Choose Time</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
