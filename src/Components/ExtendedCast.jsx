import React from 'react'
import {Link} from 'react-router-dom'

//defines weathercode 
const ExtendedCast = ({weatherData}) => {
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
    //defines wind direction
    let windHashmap = new Map([
        [0, "North"], [1, "North"],[2, "North"],[3, "North"], [4, "North"], [5, "North"], [6, "North"],[7, "North"],[8, "North"],[9, "North"],[10, "North"],[11, "North"],[12, "North"],[13, "North"], [14, "North"], [15, "North"], [16, "North"],[17, "North"],[18, "North"],[19, "North"],[20, "North"], [21, "North"],[22, "North"],[23, "North"], [24, "North"], [25, "North"],[360, "North"],[359, "North"],[358, "North"],[357, "North"],[356, "North"],[355, "North"],[354, "North"],[353, "North"],[352, "North"],[351, "North"],[350, "North"],[349, "North"],[348, "North"],[347, "North"],[346, "North"],[345, "North"],[344, "North"],[343, "North"],[342, "North"],[341, "North"],[340, "North"],[339, "North"],[338, "North"],[337, "North"],[336, "North"],[335, "North"],[34, "Northeast"], [35, "Northeast"], [36, "Northeast"],[37, "Northeast"],[38, "Northeast"],[39, "Northeast"],[40, "Northeast"], [41, "Northeast"],[42, "Northeast"],[43, "Northeast"], [44, "Northeast"], [45, "Northeast"], [46, "Northeast"],[47, "Northeast"],[48, "Northeast"],[49, "Northeast"],[50, "Northeast"],[51, "Northeast"],[52, "Northeast"],[53, "Northeast"], [54, "Northeast"], [55, "Northeast"], [56, "Northeast"],[57, "Northeast"],[58, "Northeast"],[59, "Northeast"],[60, "Northeast"], [61, "Northeast"],[62, "Northeast"],[63, "Northeast"], [64, "Northeast"], [65, "Northeast"], [66, "Northeast"],[67, "Northeast"],[68, "Northeast"],[69, "Northeast"],[70, "Northeast"], [71, "Northeast"],[72, "Northeast"],[73, "Northeast"], [74, "Northeast"], [75, "Northeast"], [76, "Northeast"],[77, "Northeast"],[78, "Northeast"],[79, "East"],[80,"East"], [81,"East"],[82,"East"],[83,"East"], [84,"East"], [85,"East"], [86,"East"],[87,"East"],[88,"East"],[89,"East"],[90,"East"],[91,"East"],[92,"East"],[93,"East"], [94,"East"], [95,"East"], [96,"East"],[97,"East"],[98,"East"],[99,"East"],[100,"East"], [101,"East"],[102,"East"],[103,"East"], [104,"East"], [105,"East"], [106,"East"],[107,"East"],[108,"East"],[109,"East"],[110,"East"], [111,"East"],[112,"East"],[113,"East"], [114,"East"], [115,"East"], [116,"East"],[117,"East"],[118,"East"],[119,"East"],[120,"East"], [121,"East"],[122,"East"],[123,"East"],[124, "Southeast"], [125, "Southeast"], [126, "Southeast"],[127, "Southeast"],[128, "Southeast"],[129, "Southeast"],[130, "Southeast"], [131, "Southeast"],[132, "Southeast"],[133, "Southeast"], [134, "Southeast"], [135, "Southeast"], [136, "Southeast"],[137, "Southeast"],[138, "Southeast"],[139, "Southeast"],[140, "Southeast"],[141, "Southeast"],[142, "Southeast"],[143, "Southeast"], [144, "Southeast"], [145, "Southeast"], [146, "Southeast"],[147, "Southeast"],[148, "Southeast"],[149, "Southeast"],[150, "Southeast"], [151, "Southeast"],[152, "Southeast"],[153, "Southeast"], [154, "Southeast"], [155, "Southeast"], [156, "Southeast"],[157, "Southeast"],[158, "Southeast"],[159, "Southeast"],[160, "Southeast"], [161, "Southeast"],[162, "Southeast"],[163, "Southeast"], [164, "Southeast"], [165, "Southeast"], [166, "Southeast"],[167, "Southeast"],[168, "Southeast"],[169, "South"],[170,"South"], [171,"South"],[172,"South"],[173,"South"], [174,"South"], [175,"South"], [176,"South"],[177,"South"],[178,"South"],[179,"South"],[180,"South"],[181,"South"],[182,"South"],[183,"South"], [184,"South"], [185,"South"], [186,"South"],[187,"South"],[188,"South"],[189,"South"],[190,"South"], [191,"South"],[192,"South"],[193,"South"], [194,"South"], [195,"South"], [196,"South"],[197,"South"],[198,"South"],[199,"South"],[200,"South"], [201,"South"],[202,"South"],[203,"South"], [204,"South"], [205,"South"], [206,"South"],[207,"South"],[208,"South"],[209,"South"],[210,"South"], [211,"South"],[212,"South"],[213,"South"],[214, "Southwest"], [215, "Southwest"], [216, "Southwest"],[217, "Southwest"],[218, "Southwest"],[219, "Southwest"],[220, "Southwest"], [221, "Southwest"],[222, "Southwest"],[223, "Southwest"], [224, "Southwest"], [225, "Southwest"], [226, "Southwest"],[227, "Southwest"],[228, "Southwest"],[229, "Southwest"],[230, "Southwest"],[231, "Southwest"],[232, "Southwest"],[233, "Southwest"], [234, "Southwest"], [235, "Southwest"], [236, "Southwest"],[237, "Southwest"],[238, "Southwest"],[239, "Southwest"],[240, "Southwest"], [241, "Southwest"],[242, "Southwest"],[243, "Southwest"], [244, "Southwest"], [245, "Southwest"], [246, "Southwest"],[247, "Southwest"],[248, "Southwest"],[249, "Southwest"],[250, "Southwest"], [251, "Southwest"],[252, "Southwest"],[253, "Southwest"], [254, "Southwest"], [255, "Southwest"], [256, "Southwest"],[257, "Southwest"],[258, "Southwest"],[259, "West"],[260,"West"], [261,"West"],[262,"West"],[263,"West"], [264,"West"], [265,"West"], [266,"West"],[267,"West"],[268,"West"],[269,"West"],[270,"West"],[271,"West"],[272,"West"],[273,"West"], [127,"West"], [275,"West"], [276,"West"],[277,"West"],[278,"West"],[279,"West"],[280,"West"], [281,"West"],[282,"West"],[283,"West"], [284,"West"], [285,"West"], [286,"West"],[287,"West"],[288,"West"],[289,"West"],[290,"West"], [291,"West"],[292,"West"],[293,"West"], [294,"West"], [295,"West"], [296,"West"],[297,"West"],[298,"West"],[299,"West"],[300,"West"], [301,"West"],[302,"West"],[303,"West"],[304, "Northwest"], [305, "Northwest"], [230, "Northwest"],[307, "Northwest"],[308, "Northwest"],[309, "Northwest"],[310, "Northwest"], [311, "Northwest"],[312, "Northwest"],[313, "Northwest"], [314, "Northwest"], [315, "Northwest"], [316, "Northwest"],[317, "Northwest"],[318, "Northwest"],[319, "Northwest"],[320, "Northwest"],[321, "Northwest"],[322, "Northwest"],[323, "Northwest"], [324, "Northwest"], [325, "Northwest"], [326, "Northwest"],[327, "Northwest"],[328, "Northwest"],[329, "Northwest"],[330, "Northwest"], [331, "Northwest"],[332, "Northwest"],[333, "Northwest"], [334, "Northwest"], [335, "Northwest"],
    ])

    //runs through weather forecast details for the next 7 days 
    if(weatherData && weatherData.daily){
        return (
            <div className="ExtendedCast">
                <h1 className="ForecastTitle">7 Day Forecast</h1>
                <div className="Cast0"> 
                    <div>{weatherData.daily.time[0]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[0])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[0]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[0]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[0]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[0]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[0])} at {weatherData.daily.windspeed_10m_max[0]}mph</h4>
                </div>
                <div className="Cast1">
                    <div>{weatherData.daily.time[1]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[1])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[1]}°F <br/>Low: {weatherData.daily.temperature_2m_min[1]}°F</h4>
                    <h4>🌅 Sunrise:<br />  {weatherData.daily.sunrise[1]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[1]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[1])} at {weatherData.daily.windspeed_10m_max[1]}mph</h4>
                </div>
                <div className="Cast2">
                    <div>{weatherData.daily.time[2]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[2])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[2]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[2]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[2]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[2]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[2])} at {weatherData.daily.windspeed_10m_max[2]}mph</h4>
                </div>
                <div className="Cast3">
                    <div>{weatherData.daily.time[3]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[3])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[3]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[3]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[3]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[3]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[3])} at {weatherData.daily.windspeed_10m_max[3]}mph</h4>
                </div>
                <div className="Cast4">
                    <div>{weatherData.daily.time[4]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[4])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[4]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[4]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[4]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[4]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[4])} at {weatherData.daily.windspeed_10m_max[4]}mph</h4>
                </div>
                <div className="Cast5">
                    <div>{weatherData.daily.time[5]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[5])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[5]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[5]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[5]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[5]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[5])} at {weatherData.daily.windspeed_10m_max[5]}mph</h4>
                </div>
                <div className="Cast6">
                <div>{weatherData.daily.time[6]}</div>
                    <h4>{weatherCodeHashmap.get(weatherData.daily.weathercode[6])}</h4>
                    <h4>High: {weatherData.daily.temperature_2m_max[6]}°F  <br/>Low: {weatherData.daily.temperature_2m_min[6]}°F</h4>
                    <h4>🌅 Sunrise:<br /> {weatherData.daily.sunrise[6]}</h4>
                    <h4>🌇 Sunset: <br /> {weatherData.daily.sunset[6]}</h4>
                    <h4>🍃 Wind: <br /> {windHashmap.get(weatherData.daily.winddirection_10m_dominant[5])} at {weatherData.daily.windspeed_10m_max[5]}mph</h4>
                </div>
                <Link to={`/`}>
                    <button className="HomepageButton">Return to Homepage</button>
                </Link>
            </div>
        )
    }
}
export default ExtendedCast