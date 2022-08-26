import { useEffect, useState } from 'react';
import Country from '../Component/Country';

const url = 'https://restcountries.com/v3.1/all';

const Home = () => {
  const [Loading, setLoading] = useState(true);
  const [countries, getCountries] = useState([]);

  const fetchCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      getCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);
  return (
    <section className="container grid place-items-center gap-[3rem] py-[3rem] sm:grid-cols-4 ">
      {countries.map((country, index) => {
        return (
          <Country key={index} {...country} index={index} />
        );
      })}
    </section>
  );
};

export default Home;
