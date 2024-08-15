import React, { useState } from 'react';
import { getCarsByFuelType } from '../services/carService';

function FuelTypeView() {
  const [fuelType, setFuelType] = useState('');
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const result = await getCarsByFuelType(fuelType);
      console.log(result); 
      setCars(result);
      setError(null);
    } catch (err) {
      console.error('Error fetching cars:', err);
      setError('Error fetching cars');
      setCars([]);
    }
  };

  return (
    <div>
      <h2>Перегляд усіх автомобілів за типом палива</h2>
      <input
        type="text"
        placeholder="Введіть тип палива (напр., gas, diesel)"
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
      {error && <p>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cars.map((car, index) => (
          <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            {car.image_url && (
              <img
                src={car.image_url}
                alt={`${car.make} ${car.model}`}
                style={{ width: '150px', height: 'auto', marginRight: '20px' }}
              />
            )}
            <div>
              <h3>{car.make} {car.model} ({car.year})</h3>
              <p>Тип палива: {car.fuel_type}</p>
              <p>Клас: {car.class}</p>
              <p>Об'єм двигуна: {car.displacement} літрів</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FuelTypeView;