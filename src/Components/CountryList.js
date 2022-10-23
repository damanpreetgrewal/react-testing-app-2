import React from 'react';
import Context from '../store/country-context';

function CountryList() {
  const ctx = React.useContext(Context);

  return (
    <section>
      <ul className='card country-list' data-testid='countryList'>
        {ctx.countries.map(country => (
          <li key={country} id={country} className='pa-10 pl-20'>
            {country}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
