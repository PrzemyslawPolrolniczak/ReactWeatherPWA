import React from 'react';
import HourTile from '../hour-tile/HourTile';
import './Day.css';

const Day = props => {
    const { date, dayData } = props;

    const renderTiles = () => {
        const tiles = dayData.map(hourlyData => {
            return <HourTile data={hourlyData} key={hourlyData.dt} />
        });
        return tiles;
    }

    return (
        <div className="Day">
            <header className="Day-header">
                <h4>{date}</h4>
            </header>
            <div className="Day-content-row">
                {renderTiles()}
            </div>
        </div>
    );
}

export default Day;