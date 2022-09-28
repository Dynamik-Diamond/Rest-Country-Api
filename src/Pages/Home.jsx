import { useGlobalContext } from '../Context';
import CountryList from '../Component/CountryList';
import Filter from '../Component/Filters';
import Loading from '../Component/Loading';

const Home = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="container py-[3rem]">
      <Filter />
      <CountryList />
    </section>
  );
};

export default Home;
