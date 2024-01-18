import { useState, useEffect } from "react";
import countryService from "./services/countries.js";
import CountryList from "./components/CountryList.jsx";
import CountrySearch from "./components/CountrySearch.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

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
        setShowDetails={setShowDetails}
      />
      <CountryList
        countries={countries}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}

export default App;
