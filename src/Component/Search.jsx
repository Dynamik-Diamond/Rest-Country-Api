import { HiOutlineSearch } from 'react-icons/hi';

const Search = ({ setQuery, countries }) => {
  const handleSubmit = e => e.preventDefault();

  const handleSearchChange = e => {
    if (!e.target.value) return setQuery(countries);

    const filterCountry = countries.filter(item =>
      item.name.common
        .toLowerCase()
        .includes(e.target.value),
    );

    setQuery(filterCountry);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center"
    >
      <button>
        <HiOutlineSearch onClick={handleSearchChange} />
      </button>
      <input
        type="text"
        id="text"
        placeholder="Search for a country..."
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Search;
