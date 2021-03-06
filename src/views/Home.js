import React, { Component } from 'react';
import APIRequest from '../config';
import getIcon from '../icons';

class Home extends Component {
    state = {
        weatherData: {}
    }
    
    getCurrentWeatherData = () => {
        fetch(APIRequest.currentWeather)
        .then(data => data.json())
        .then(data => {
            this.setState({  
                weatherData: data     
            })
        })
    }

    componentDidMount() {
        this.getCurrentWeatherData()
    }

    render() {
        const { weatherData } = this.state;

        if(!weatherData.weather) {
            return null;
        }
        
        const { icon: iconID, main: weatherName, description: weatherDescription } = weatherData.weather[0];
        const { temp: temperature, humidity, pressure} = weatherData.main;
        const { speed: windSpeed, deg: windDirection } = weatherData.wind;

        return (
            <div className="Home">
                 <div className="weather-image">
                    <img src={getIcon(iconID)} alt={weatherName} />
                </div>
                <div className="weather-info">
                    {temperature}&deg;C
                </div>
                <div className="weather-details">
                    {weatherName}
                </div>
                <div className="weather-table">
                    <li><span>Description</span><span>{weatherDescription}</span></li>
                    <li><span>Humidity</span><span>{humidity}%</span></li>
                    <li><span>Pressure</span><span>{pressure} hPa</span></li>
                    <li><span>Wind</span><span><i style={{transform: `rotate(${windDirection}deg)`}}>&#8679;</i> {windSpeed} km/h</span></li>
                </div>
            </div>
        );
    }
}

export default Home;