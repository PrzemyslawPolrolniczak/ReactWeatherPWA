import React from 'react';
import getIcon from '../../icons';
import './HourTile.css';

const getForecastHour = (dateInTextFormat) => {
    const splittedDate = dateInTextFormat.split(' ')[1].split(':');
    splittedDate.pop();
    return splittedDate.join(':');
}

const HourTile = props => {
    const { data: weatherData } = props

    const { icon: iconID, main: weatherName, description: weatherDescription } = weatherData.weather[0];
    const { temp: temperature, humidity, pressure} = weatherData.main;
    const { speed: windSpeed, deg: windDirection } = weatherData.wind;
    const { dt_txt: dateInTextFormat } = weatherData;

    return (
        <div className="HourTile">
            <div className="HourTile-weather-image">
                <img src={getIcon(iconID)} alt={weatherName} />
            </div>
            <div className="HourTile-weather-info">
                {temperature}&deg;C
            </div>
            <div className="HourTile-weather-details">
                {weatherName}
            </div>
            <div className="HourTile-weather-time">
                {getForecastHour(dateInTextFormat)}
            </div>
            {/* <div className="HourTile-weather-table hidden">
                <li><span>Description</span><span>{weatherDescription}</span></li>
                <li><span>Humidity</span><span>{humidity}%</span></li>
                <li><span>Pressure</span><span>{pressure} hPa</span></li>
                <li><span>Wind</span><span><i style={{transform: `rotate(${windDirection}deg)`}}>&#8679;</i> {windSpeed} km/h</span></li>
            </div> */}
        </div>
    );
}

export default HourTile;