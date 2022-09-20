import { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context';
import Country from '../Component/Country';
import SingleCountry from './SingleCountry';
import Search from '../Component/Search';

const url = 'https://restcountries.com/v3.1/all';

const Home = () => {
  const { countries, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="container py-[3rem]">
      <div>
        <Search />
      </div>

      <div className=" grid  place-items-center gap-[3rem] py-[3rem] sm:grid-cols-2 lg:grid-cols-4 ">
        {countries.map((country, index) => {
          return (
            <Country
              key={country.name.common}
              {...country}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
