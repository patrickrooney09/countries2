import countryService from "../services/countries";
import { useEffect, useState } from "react";

function SingleCountryDetailed(props) {
  const { country } = props;

  const [temp, setTemp] = useState(0);

  useEffect(() => {
    countryService
      .getCapitalWeather(
        country.capitalInfo.latlng[0],
        country.capitalInfo.latlng[1]
      )
      .then((response) => {
        console.log(response.data);
        setTemp(response.data.current.temp);
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
        </div>
      </div>
    </li>
  );
}

export default SingleCountryDetailed;
