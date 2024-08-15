import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MakeView from './components/MakeView';
import YearView from './components/YearView';
import DisplacementView from './components/DisplacementView';
import FuelTypeView from './components/FuelTypeView';
import ClassView from './components/ClassView';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Меню</h1>
        <div className="card-container">
          <Link to="/make" className="card">Перегляд усіх автомобілів певного виробника</Link>
          <Link to="/year" className="card">Перегляд усіх автомобілів певного року випуску</Link>
          <Link to="/class" className="card">Перегляд усіх автомобілів певного класу</Link>
          <Link to="/displacement" className="card">Перегляд усіх автомобілів за об'ємом двигуна</Link>
          <Link to="/fuel_type" className="card">Перегляд усіх автомобілів за типом палива</Link>
        </div>

        <Routes>
          <Route path="/make" element={<MakeView />} />
          <Route path="/year" element={<YearView />} />
          <Route path="/class" element={<ClassView />} />
          <Route path="/displacement" element={<DisplacementView />} />
          <Route path="/fuel_type" element={<FuelTypeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;