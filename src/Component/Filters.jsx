import { useGlobalContext } from '../Context';
import Search from './Search';
import CategoryFilter from './CategoryFIlter';
const Filters = () => {
  const { query, setQuery, countries } = useGlobalContext();
  return (
    <section className="container py-[3rem]">
      <div className="flex flex-wrap justify-between items-center">
        {/* search form */}
        <Search
          query={query}
          setQuery={setQuery}
          countries={countries}
        />
        {/* Select form */}
        <CategoryFilter
          query={query}
          setQuery={setQuery}
          countries={countries}
        />
      </div>
    </section>
  );
};

export default Filters;
