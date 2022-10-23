import React from 'react';
import { response } from '../response';

const Context = React.createContext({
  countries: [],
  filterCountry: searchText => {},
});

export const ContextProvider = ({ children }) => {
  const [countries, setCountries] = React.useState(response);

  const filterCountry = searchText => {
    console.log(searchText);
    if (searchText) {
      const filteredCountries = response.filter(country =>
        country.toLowerCase().includes(searchText.toLowerCase())
      );
      setCountries(filteredCountries);
    } else {
      setCountries(response);
    }
  };

  return (
    <Context.Provider
      value={{
        countries: countries,
        filterCountry: filterCountry,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
