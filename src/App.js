import React from 'react';
import ListCountries from './components/ListCountries';
import SearchCountries from './components/SearchCountries';


function App() {
  return (
    <div className="App">
    <SearchCountries />
    <ListCountries />
    </div>
  );
}

export default App;
