function SingleCountryDetailed(props) {
  const { country } = props;
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
              return <li key={index}>{country.languages[currentLanguage]}</li>;
            })}
          </ul>
        </div>
        <img src={country.flags.png} />
      </div>
    </li>
  );
}

export default SingleCountryDetailed;
