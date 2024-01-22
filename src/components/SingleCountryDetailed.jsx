import countryService from "../services/countries";
import { useEffect, useState } from "react";

function SingleCountryDetailed(props) {
  const { country } = props;

  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    countryService
      .getCapitalWeather(
        country.capitalInfo.latlng[0],
        country.capitalInfo.latlng[1]
      )
      .then((response) => {
        console.log(response.data);
        setTemp(response.data.current.temp);
        setIcon(
          `https://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
        );
        setDescription(response.data.current.weather[0].description);
        setWindSpeed(response.data.current.wind_speed);
      });
  }, []);

  return (
    <li>
      <div>
        <h2>{country.name.common}</h2>
        <div>
          <div>capital: {country.capital[0]}</div>
          <div>area: {country.area}</div>
        </div>

        <div>
          <strong>Languages:</strong>
          <ul>
            {Object.keys(country.languages).map((currentLanguage, index) => {
              return (
                <li key={index}>
                  <strong>{country.languages[currentLanguage]}</strong>
                </li>
              );
            })}
          </ul>
        </div>
        <img src={country.flags.png} />
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <div>{temp} Farenheit</div>
          <img src={icon} />
          <div>{description}</div>
          <div>Wind Speed: {windSpeed} mph</div>
        </div>
      </div>
    </li>
  );
}

export default SingleCountryDetailed;
