import { useGlobalContext } from '../Context';
import Search from './Search';
import CategoryFilter from './CategoryFIlter';
const Filters = () => {
  const { query, setQuery, countries } = useGlobalContext();
  return (
    <header className="container py-[3rem]">
      <div className="flex flex-col md:flex-row md:justify-between ">
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
    </header>
  );
};

export default Filters;
