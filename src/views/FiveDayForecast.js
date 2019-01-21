import React, { Component } from 'react';
import Day from '../components/day/Day';
import APIRequest from '../config';
import _groupBy from 'lodash/groupBy';

const getDateFromForecastSingleData = singleRecord => {
    return singleRecord.dt_txt.split(' ')[0];
}

class FiveDayForecast extends Component {
    state = {
        fiveDaysWeatherData: {}
    }

    getFiveDaysWeatherData = () => {
        fetch(APIRequest.fiveDayForecast)
        .then(data => data.json())
        .then(data => {
            this.setState({
                fiveDaysWeatherData: data
            })
        })
    }

    componentDidMount() {
        this.getFiveDaysWeatherData();
    }

    render() {
        const { fiveDaysWeatherData } = this.state;

        if (!fiveDaysWeatherData.list || (fiveDaysWeatherData.list && !fiveDaysWeatherData.list.length)) {
            return null;
        }

        const dailyWeather = _groupBy(fiveDaysWeatherData.list, singleRecord => {
            return getDateFromForecastSingleData(singleRecord);
        })

        const renderDays = Object.keys(dailyWeather).map(day => {
            return <Day date={day} dayData={dailyWeather[day]} key={day}/>
        }) 

        return (
            <div className="FiveDayForecast">
                {renderDays}
            </div>
        );
    }
}

export default FiveDayForecast;