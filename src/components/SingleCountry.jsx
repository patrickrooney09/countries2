function SingleCountry(props) {
  const { country } = props;
  return <li>{country.name.common}</li>;
}
export default SingleCountry;
