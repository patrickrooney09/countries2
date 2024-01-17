import { useState } from "react";
import countryService from "./services/countries.js";

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countryService.getAll());
  return (
    <div>
      <h1>Countries</h1>
      <ul></ul>
    </div>
  );
}

export default App;
