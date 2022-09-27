import { useGlobalContext } from '../Context';
import Country from './CountryCard';

const CountryList = () => {
  const { countries, getCountries, isLoading, query } =
    useGlobalContext();

  const result = query.map((country, index) => {
    return (
      <Country
        key={country.name.common}
        {...country}
        index={index}
      />
    );
  });

  return (
    <div className=" grid  place-items-center gap-[3rem] py-[3rem] sm:grid-cols-2 lg:grid-cols-4 ">
      {result}
    </div>
  );
};

export default CountryList;
