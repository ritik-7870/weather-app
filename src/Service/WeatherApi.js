import axios from "axios";

export const getWeatherData = async (cityName) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=b1c58e164f1193600afeeffcdfe11b70`;

    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.log(error);
  }
};
