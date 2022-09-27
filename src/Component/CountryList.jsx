import { useGlobalContext } from '../Context';
import Country from './CountryCard';

const CountryList = () => {
  const { query } = useGlobalContext();

  const result = query.map((country, index) => {
    return (
      <Country
        key={country.name.common}
        {...country}
        index={index}
      />
    );
  });

  const content = result?.length ? (
    result
  ) : (
    <article>
      <h1 className="text-center font-bold text-[1rem]">
        No Matching Country
      </h1>
    </article>
  );

  return (
    <div className=" grid  place-items-center gap-[3rem] py-[3rem] sm:grid-cols-2 lg:grid-cols-4 ">
      {content}
    </div>
  );
};

export default CountryList;
