import { useState, useEffect } from "react";
import countryService from "./services/countries.js";
import CountryList from "./components/CountryList.jsx";
import CountrySearch from "./components/CountrySearch.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [isOneCountry, setIsOneCountry] = useState(false);

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <CountrySearch
        setCountries={setCountries}
        setIsOneCountry={setIsOneCountry}
      />
      <CountryList
        countries={countries}
        isOneCountry={isOneCountry}
        setIsOneCountry={setIsOneCountry}
      />
    </div>
  );
}

export default App;
