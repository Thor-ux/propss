import React from 'react';
import Listing from './Listing';
import data from './etsy.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
};

export default App;