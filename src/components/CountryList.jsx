import SingleCountry from "./SingleCountry";

function CountryList(props) {
  const { countries, isOneCountry, setIsOneCountry } = props;

  return countries.length > 10 ? (
    <div>narrow your search</div>
  ) : (
    <ul style={{ listStyleType: "none" }}>
      {countries.map((currentCountry, index) => {
        return (
          <SingleCountry
            country={currentCountry}
            key={index}
            isOneCountry={isOneCountry}
            setIsOneCountry={setIsOneCountry}
          />
        );
      })}
    </ul>
  );
}

export default CountryList;
