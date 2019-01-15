import React, { Component } from 'react';
import APIRequest from '../config';
import getIcon from '../icons';

class Home extends Component {
    getCurrentWeatherData = () => {
        fetch(APIRequest.currentWeather)
        .then(data => data.json())
        .then(data => {
            this.setState(state => {
                return {
                    weatherData: data
                }
            })
        })
    }

    componentWillMount() {
        this.getCurrentWeatherData()
    }

    render() {
        const { weatherData } = this.state ? this.state : '';
        let weatherIcon,
            weatherInfo,
            weatherDetails,
            weatherTable;

        if (weatherData) {
            const iconID = weatherData.weather[0].icon;
            const temperature = weatherData.main.temp;
            const weatherName = weatherData.weather[0].main;

            weatherIcon = (
                <div className="weather-image">
                    <img src={getIcon(iconID)} alt={weatherName} />
                </div>
            )
            weatherInfo = (
                <div className="weather-info">
                    {temperature}&deg;C
                </div>
            )
            weatherDetails = (
                <div className="weather-details">
                    {weatherName}                
                </div>
            )
            weatherTable = (
                <div className="weather-table">
                    <li><span>Description</span><span>{weatherData.weather[0].description}</span></li>
                    <li><span>Humidity</span><span>{weatherData.main.humidity}%</span></li>
                    <li><span>Pressure</span><span>{weatherData.main.pressure} hPa</span></li>
                </div>
            )
        }

        return (
            <div className="Home">
                {weatherIcon}
                {weatherInfo}
                {weatherDetails}
                {weatherTable}          
            </div>
        );
    }
}

export default Home;