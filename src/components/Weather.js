import React, { useState, useEffect } from 'react';
import './Weather.css';
import Skycons, {SkyconsType} from "react-skycons";

function Weather() {
// https://github.com/roadmanfong/react-skycons/blob/master/src/Skycons.tsx

  const weatherApiKey = '96ffa36770c56e45e94d5d4a1552f62c';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&units=metric&appid=${weatherApiKey}`;
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherItems, setWeatherItems] = useState([]);

    // Skycons  
    // let weatherConditions = {
    //   CLEAR_DAY: 'CLEAR_DAY',
    //   CLEAR_NIGHT: 'CLEAR_NIGHT',
    //   PARTLY_CLOUDY_DAY: 'PARTLY_CLOUDY_DAY',
    //   PARTLY_CLOUDY_NIGHT: 'PARTLY_CLOUDY_NIGHT',
    //   CLOUDY: 'CLOUDY',
    //   RAIN: 'RAIN',
    //   SLEET: 'SLEET',
    //   SNOW: 'SNOW',
    //   WIND: 'WIND',
    //   FOG: 'FOG'
    // }

    const [iconType, setIconType] = useState('')
    const [animate, setAnimate] = useState(true);
    const [ color, setColor ] = useState('#fff');
    // const color = "#fff";
    

    useEffect(() => {
        fetch(weatherUrl)
          .then(res => res.json())
          .then((result) => {
            setWeatherItems(result);
              setIsLoaded(true);
              setIconType(updateIconType(result.weather[0].description));
              
              console.log(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      
      function updateIconType(apiResult){
        
        const currentTime = new Date().getHours();

        // get day or night 
        function dayTime(currentTime){
          if (currentTime >= 7){
            return true;
          } else {
            return false;
          }
        }

       if (apiResult === 'few clouds' || apiResult === 'scattered clouds' || apiResult === 'broken clouds'){
          if(dayTime(currentTime)){        
            setColor('lightgrey');
        return SkyconsType.PARTLY_CLOUDY_DAY;
        } else if(!dayTime(currentTime)) {
          setColor('darkblue');
          return SkyconsType.PARTLY_CLOUDY_NIGHT;
        }
      }

      else if (apiResult === 'clear sky'){
        if(dayTime(currentTime)){        
          setColor('yellow')
          return SkyconsType.CLEAR_DAY;
          
          } else if(!dayTime(currentTime)) {
            setColor('darkblue');
            return SkyconsType.CLEAR_NIGHT;
          }
      }

      else if (apiResult === 'shower rain' || apiResult === 'rain' || apiResult === 'thunderstorm'){    
        setColor('lightblue')
         return SkyconsType.RAIN;
      }

      else if (apiResult === 'snow'){    
        setColor('white'); 
          return SkyconsType.SNOW;
      }

      else if (apiResult === 'mist'){    
        setColor('lightgrey');
        return SkyconsType.FOG; 
    }

      else {
        console.log('error');
      }

      setAnimate(true);

    }
      

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className="weather-component">
                <h1>{weatherItems.name}</h1>
                {/* Capitalize below IIFE */}
                <p className="weather-description">{(function(){
                  const weatherDesc = weatherItems.weather[0].description;
                  const words = weatherDesc.split(" ");

                  for (let i = 0; i < words.length; i++) {
                   words[i] = words[i][0].toUpperCase() + words[i].substr(1) + ' ';
                };
                return words;
                  })()}</p>
                <Skycons 
                
                color={color}
                type={iconType}
                animate={true}
                size={100}
                />
                
                <p className="temperature-main">{weatherItems.main.temp.toFixed(0)}ºC</p>
                <p className="temperature-min-max">Low: {weatherItems.main.temp_min.toFixed(0)}º  |  High: {weatherItems.main.temp_max.toFixed(0)}º</p>
            </div>
        )
    }
  
}

export default Weather