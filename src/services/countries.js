import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const weatherAPI = import.meta.env.VITE_API_KEY;

const getAll = () => {
  return axios.get(baseUrl);
};

const getCapitalWeather = (latitude, longitude) => {
  return axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherAPI}`
  );
};

export default {
  getAll,
  getCapitalWeather,
};
