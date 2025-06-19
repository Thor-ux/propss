import React from 'react';
import Listing from './Listing';
import etsy_data from './data/etsy.json';
import './App.css';

const App = () => {
  const items = JSON.parse(etsy_data);

  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  );
};

export default App;