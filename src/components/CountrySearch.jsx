import countryServices from "../services/countries";

function CountrySearch(props) {
  const { setCountries, setShowDetails } = props;

  const handleInput = () => {
    const searchValue = event.target.value;
    countryServices.getAll().then((response) => {
      const filteredList = response.data.filter((currentCountry) => {
        if (
          currentCountry.name.common
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          return currentCountry;
        }
      });
      if (filteredList.length === 1) {
        setShowDetails(true);
      } else {
        setShowDetails(false);
      }
      setCountries(filteredList);
    });
  };
  return (
    <form>
      <input onChange={handleInput} />
    </form>
  );
}

export default CountrySearch;
