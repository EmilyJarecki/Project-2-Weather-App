import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import {useEffect, useState} from 'react'

function App() {
  getLocation()
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const[tempData, setTempData] = useState([])

 
  function getLocation(){
    if ("geolocation" in navigator) {
      console.log("Available");
      } else {
      console.log("Not Available");
      }
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
        console.log("Latitude is :", position.coords.latitude)
        console.log("Longitude is :", position.coords.longitude)
      })
    }
    async function getData() {
      const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
      try{
        const response = await fetch (url)
        const data = await response.json()
        setTempData(data)
        console.log(data)//DOES PRINT OUT DATA
      }catch(err){
        console.log(err)
      }
    }

  useEffect(()=> {
      getLocation()
  }, [])

  useEffect(()=> {
    if(lat && long) {
      getData()
    }
  }, [lat, long])

  return (
    tempData
    ?
    <div className="App">
      <Sidebar weatherData={tempData} />
      <Wind weatherData={tempData}/>
      <SunriseSunset weatherData={tempData}/>
      <WeeklyForecast weatherData={tempData}/>

    </div> 
    : <p>Loading...</p>
  );
}

export default App

//format data and time

