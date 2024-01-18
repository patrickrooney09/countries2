import { useState, useEffect } from "react";
import countryService from "./services/countries.js";
import CountryList from "./components/CountryList.jsx";
import CountrySearch from "./components/CountrySearch.jsx";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <CountrySearch setCountries={setCountries} countries={countries} />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
