import React, {
  useState,
  useEffect,
  useContext,
} from 'react';

const mainUrl = 'https://restcountries.com/v3.1/all';

const searchUrl = 'https://restcountries.com/v3.1/name/';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, getCountries] = useState([]);
  const [query, setQuery] = useState('');

  const fetchCountry = async () => {
    setIsLoading(true);
    let url;

    const urlQuery = `${query}`;

    if (query) {
      url = `${searchUrl}${urlQuery}`;
    } else {
      url = `${mainUrl}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    const sorted = data.sort(
      (a, b) => b.population - a.population,
    );
    getCountries(sorted);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        countries,
        setIsLoading,
        query,
        setQuery,
        fetchCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
