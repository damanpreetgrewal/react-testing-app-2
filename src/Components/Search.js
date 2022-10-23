import React from 'react';
import Context from '../store/country-context';

function Search() {
  const [searchText, setSearchText] = React.useState('');

  const ctx = React.useContext(Context);

  React.useEffect(() => {
    ctx.filterCountry(searchText);
  }, [searchText]);

  return (
    <input
      data-testid='filterInput'
      className='large'
      placeholder='Enter Country Name'
      onChange={event => setSearchText(event.target.value)}
    />
  );
}

export default Search;
