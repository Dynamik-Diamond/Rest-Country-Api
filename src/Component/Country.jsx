import { Link } from 'react-router-dom';
import SingleCountry from '../Pages/SingleCountry';

const Country = (country, index) => {
  const { flags, population, name, region, capital } =
    country;
  return (
    <Link to={`/${country.index}`}>
      <article>
        <img src={flags.png} alt="flag" />
      </article>
      <article>
        <h3>{name.common}</h3>
        <h4>Population: {population}</h4>
        <h4>Region: {region}</h4>
        <h4>Capital: {capital}</h4>
      </article>
    </Link>
  );
};

export default Country;
