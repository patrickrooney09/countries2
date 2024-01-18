import SingleCountry from "./SingleCountry";

function CountryList(props) {
  const { countries, showDetails, setShowDetails } = props;

  return countries.length > 10 ? (
    <div>narrow your search</div>
  ) : (
    <ul>
      {countries.map((currentCountry, index) => {
        return (
          <SingleCountry
            country={currentCountry}
            key={index}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        );
      })}
    </ul>
  );
}

export default CountryList;
