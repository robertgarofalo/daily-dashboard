import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
   
    // 96ffa36770c56e45e94d5d4a1552f62c


    const weatherApiKey = '96ffa36770c56e45e94d5d4a1552f62c';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&units=metric&appid=${weatherApiKey}`;
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherItems, setWeatherItems] = useState([]);

    useEffect(() => {
        fetch(weatherUrl)
          .then(res => res.json())
          .then((result) => {
            setWeatherItems(result);
              setIsLoaded(true);
              // console.log('here they are', weatherItems);
              console.log(result);

            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      // console.log('here are the items: ', weatherItems);
   


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className="weather-component">
                <h1>Melbourne</h1>
                <p className="weather-description">Partly Cloudy</p>
                <p>ICON</p>
                
                <p>{weatherItems.main.temp}</p>
                <p>L11 H21</p>
                
            </div>
        )
    }
    
}

export default Weather