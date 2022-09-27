import { useGlobalContext } from '../Context';
import CountryList from '../Component/CountryList';
import Filter from '../Component/Filters';

const Home = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="container py-[3rem]">
      <Filter />
      <CountryList />
    </section>
  );
};

export default Home;
