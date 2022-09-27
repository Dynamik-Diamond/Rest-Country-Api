import React, {
  useState,
  useEffect,
  useContext,
} from 'react';

const mainUrl = 'https://restcountries.com/v3.1/all';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, getCountries] = useState([]);
  const [query, setQuery] = useState([]);

  const fetchCountry = async url => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    const sorted = data.sort(
      (a, b) => b.population - a.population,
    );
    getCountries(sorted);
    setQuery(sorted);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountry(`${mainUrl}`);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        countries,
        getCountries,
        setIsLoading,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
