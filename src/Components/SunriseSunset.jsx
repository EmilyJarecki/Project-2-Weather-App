import {useState} from 'react'
import sun from "./sun.png"
import moon from "./half-moon.png"

const SunriseSunset = ({weatherData}) => {
    const[state, setState] = useState(false)

    //determines which side the user is viewing:
    const toggle=()=>{
        setState(!state)
    }
    if(weatherData.daily){
        return (
            <div className="Sun">
                <div  className="toggle">
        
                    <div className="Sunset">
                        <div className="SunWords">Sunset</div> 
                        <div className="SunTime">{weatherData.daily.sunset[0]}</div>
                    </div> 
                    <div className="Sunrise">
                        <div className="SunWords">Sunrise: </div> 
                        <div className="SunTime">{weatherData.daily.sunrise[0]}</div>
                    </div>
                    
                </div>
            </div> 
        )
    }
}

export default SunriseSunset