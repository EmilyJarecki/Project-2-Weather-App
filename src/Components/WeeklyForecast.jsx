import { Link } from 'react-router-dom'

const WeeklyForecast = ({weatherData}) => {
    
    //defines weathercode   
    let weatherCodeHashmap = new Map([
        [0, "🌤 Clear"], 
        [1, "🌥 Partly Cloudy"],  
        [2, "🌥 Partly Cloudy"],
        [3, "🌥 Partly Cloudy"], 
        [45, "🌫 Foggy"],
        [48, "🌫 Foggy"],  
        [51, "☔ Drizzle"],
        [53, "☔ Drizzle"], 
        [55, "☔ Drizzle"],
        [56, "☔ Freezing Drizzle"],
        [57, "☔ Freezing Drizzle"],
        [61, "🌧 Rain"],  
        [63, "🌧 Rain"],
        [66, "🌧 Rain"],
        [66, "🌧 Freezing Rain"],
        [67, "🌧 Freezing Rain"],
        [71, "⛄ Snow"], 
        [73, "⛄ Snow"],
        [75, "⛄ Snow"],
        [77, "⛄ Snow Grain"],
        [80, "☔ Rain Showers"],  
        [81, "☔ Rain Showers"], 
        [82, "☔ Rain Showers"],
        [85, "❄ Snow Showers"],
        [86, "❄ Snow Showers"],
        [95, "⛈ Thunderstorms with Hail"],
        [96, "⛈ Thunderstorms with Hail"],
        [99, "⛈ Thunderstorms with Hail"],
    ])
    
    //provides wind speed and direction for the next 7 days:
    if(weatherData && weatherData.daily){
        return (
            <div className="ForecastContainer">
                <Link to={`/weekly`} className="ForecastHeader">
                    <div className="ForecastHeader">
                        <div className="TitleOnForecast">Weekly Forecast</div>
                    </div>
                </Link>
                <div className="day1">
                    <div>{weatherData.daily.time[1]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[1])}</span></div>
                </div>
                <div className="day2">
                    <div>{weatherData.daily.time[2]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[2])}</span></div>
                </div>
                <div className="day3">
                    <div>{weatherData.daily.time[3]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[3])}</span></div>
                </div>
                <div className="day4">
                    <div>{weatherData.daily.time[4]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[4])}</span></div>
                </div>
                <div className="day5">
                    <div>{weatherData.daily.time[5]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[5])}</span></div>
                </div>
                <div className="day6">
                    <div>{weatherData.daily.time[6]}:<br />
                    <span className="Weathercode">{weatherCodeHashmap.get(weatherData.daily.weathercode[6])}</span></div>
                </div>
            </div>
        )
    }
}

export default WeeklyForecast