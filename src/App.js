// src/App.js
import React, { useState } from 'react';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import './App.css';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="App">
      <CarList onSelectCar={setSelectedCar} />
      <CarDetail car={selectedCar} />
    </div>
  );
};

export default App;
