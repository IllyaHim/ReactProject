// src/components/CarList.js
import React, { useState, useEffect } from 'react';

const CarList = ({ onSelectCar }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&rows=50')
      .then(response => response.json())
      .then(data => {
        console.log(data.records); // Виведемо дані у консоль для перевірки
        setCars(data.records);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Автомобільний каталог</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <div key={index} className="car-card" onClick={() => onSelectCar(car)}>
            <img src={car.fields.picture || 'default-image-url.jpg'} alt={`${car.fields.make} ${car.fields.model}`} />
            <h3>{car.fields.make} {car.fields.model}</h3>
            <p>{car.fields.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
