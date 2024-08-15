import React, { useState } from 'react';
import { getCarsByClass } from '../services/carService';

function ClassView() {
  const [carClass, setCarClass] = useState('');
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const result = await getCarsByClass(carClass);
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
      <h2>Перегляд усіх автомобілів певного класу</h2>
      <input
        type="text"
        placeholder="Введіть клас автомобіля (напр., SUV, sedan)"
        value={carClass}
        onChange={(e) => setCarClass(e.target.value)}
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

export default ClassView;