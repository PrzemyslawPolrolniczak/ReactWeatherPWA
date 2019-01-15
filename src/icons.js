import clearSkyNight from './assets/clearnight.svg';
import cloudy from './assets/cloudy.svg';
import littleCloudyNight from './assets/cloudynight.svg';
import rainy from './assets/rain.svg';
import snow from './assets/snow.svg';
import thunderstorm from './assets/storm.svg';
import littleCloudyDay from './assets/sunandcloud.svg';
import clearSkyDay from './assets/sunny.svg';
import veryCloudy from './assets/verycloudy.svg';
import veryRainy from './assets/veryrainy.svg';


const iconCodes = {
    atmosphereIcon: '50d',
    snowyNight: '13n',
    snowyDay: '13d',
    thunderstormNight: '11n',
    thunderstormDay: '11d',
    rainyNight: '10n',
    rainyDay: '10d',
    veryRainyNight: '09n',
    veryRainyDay: '09d',
    veryCloudyNight: '04n',
    veryCloudyDay: '04d',
    cloudyNight: '03n',
    cloudyDay: '03d',
    littleCloudyNight: '02n',
    littleCloudyDay: '02d',
    clearSkyNight: '01n',
    clearSkyDay: '01d'
};

const getIcon = iconID => {
    switch (iconID) {
        case iconCodes.clearSkyDay:
            return clearSkyDay
        case iconCodes.clearSkyNight:
            return clearSkyNight
        case iconCodes.littleCloudyDay:
            return littleCloudyDay
        case iconCodes.littleCloudyNight:
            return littleCloudyNight
        case iconCodes.cloudyDay:
            return cloudy
        case iconCodes.cloudyNight:
            return cloudy
        case iconCodes.veryCloudyDay:
            return veryCloudy
        case iconCodes.veryCloudyNight:
            return veryCloudy
        case iconCodes.veryRainyDay:
            return veryRainy
        case iconCodes.veryRainyNight:
            return veryRainy
        case iconCodes.rainyDay:
            return rainy
        case iconCodes.rainyNight:
            return rainy
        case iconCodes.thunderstormDay:
            return thunderstorm
        case iconCodes.thunderstormNight:
            return thunderstorm
        case iconCodes.snowyDay:
            return snow
        case iconCodes.snowyNight:
            return snow
        case iconCodes.atmosphereIcon:
            return clearSkyDay
        default:
            return clearSkyDay
    }
}

export default getIcon;