import grabWeatherData, { grabNewData } from './grabWeatherData';
import showDataToUser from './showDataToUser';

const organizeData = async (location) => {
  const oldData = await grabWeatherData(location);
  const newData = await grabNewData(oldData.coord.lat, oldData.coord.lon);

  const { main } = oldData;
  const { current, daily, hourly, minutely } = newData;

  const data = {
    main,
    current,
    daily,
    hourly,
    minutely,
  };

  showDataToUser(data);
};
export default organizeData;
