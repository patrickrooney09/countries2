import { useState, useEffect } from "react";
import countryService from "./services/countries.js";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("use effect running");

    countryService.getAll().then((response) => {
      console.log("promise fulfilled");
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((currentCountry) => {
          return <li>{currentCountry.name.common}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
