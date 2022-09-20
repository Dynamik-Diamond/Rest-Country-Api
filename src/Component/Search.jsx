import { useGlobalContext } from '../Context';
import { HiOutlineSearch } from 'react-icons/hi';

const Search = () => {
  const { query, setQuery, fetchCountry } =
    useGlobalContext();

  const handleSubmit = e => {
    e.preventDefault();

    fetchCountry();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center"
    >
      <HiOutlineSearch onClick={handleSubmit} />
      <input
        type="text"
        id="text"
        placeholder="Search for a country"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
