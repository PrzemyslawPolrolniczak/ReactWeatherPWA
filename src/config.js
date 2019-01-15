// API endpoint

const endpoint = 'https://api.openweathermap.org/data/2.5/';
const APIKey = '76bae9a4757eff1bacea8dc8c6db1385';
const cityID = 3081368; // Wrocław

const APIRequest = {
    currentWeather: `${endpoint}weather?id=${cityID}&units=metric&APPID=${APIKey}`,
    fiveDayForecast: `${endpoint}forecast?id=${cityID}&units=metric&APPID=${APIKey}`
};

export default APIRequest;