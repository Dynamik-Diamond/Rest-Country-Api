import { useGlobalContext } from '../Context';

const CategoryFilter = ({ setQuery, countries }) => {
  const handleSubmit = e => e.preventDefault();

  const handleCategory = e => {
    if (e.target.value === 'All')
      return setQuery(countries);

    const filterCategory = countries.filter(
      country => country.region === e.target.value,
    );

    setQuery(filterCategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={handleCategory}
        className="bg-white dark:bg-DarkBlue py-2 px-2 rounded-md shadow-lg outline-none, border-none"
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default CategoryFilter;
