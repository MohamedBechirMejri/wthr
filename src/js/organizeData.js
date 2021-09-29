import axios from 'axios';
import grabWeatherData, {
    grabNewData
} from './grabWeatherData';
import showDataToUser from './showDataToUser';

const organizeData = async (location) => {
    const oldData = await grabWeatherData(location);
    const newData = await grabNewData(oldData.coord.lat, oldData.coord.lon);
    let city = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${oldData.coord.lat}&lon=${oldData.coord.lon}&appid=c8a1733571c211a516b796af5a8acda7`,
    );

    const {
        main
    } = oldData;
    const {
        current,
        daily,
        hourly,
        minutely
    } = newData;
    city = city.data[0].name;

    const data = {
        main,
        current,
        daily,
        hourly,
        minutely,
        city,
    };

    showDataToUser(data);
};
export default organizeData;
