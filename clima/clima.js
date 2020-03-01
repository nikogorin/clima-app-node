const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a1ec1cb0b5cb4778aa9d5105220f9417&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}