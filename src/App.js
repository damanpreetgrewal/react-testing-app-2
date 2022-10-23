import React from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
import 'h8k-components';

const title = 'Country Filter';
function App() {
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <section className='w-30 justify-content-center layout-column mt-30 mx-auto'>
        <Search />
        <CountryList />
      </section>
    </div>
  );
}

export default App;
