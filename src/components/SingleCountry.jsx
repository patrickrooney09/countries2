import { useState } from "react";

import SingleCountryDetailed from "./SingleCountryDetailed";

function SingleCountry(props) {
  const { country, isOneCountry } = props;

  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return isOneCountry === true ? (
    <SingleCountryDetailed country={country} />
  ) : display === true ? (
    <div>
      <SingleCountryDetailed country={country} />
      <button onClick={handleClick}>hide</button>
    </div>
  ) : (
    <div>
      <li>
        {country.name.common}
        <button onClick={handleClick}>show</button>
      </li>
    </div>
  );
}
export default SingleCountry;
