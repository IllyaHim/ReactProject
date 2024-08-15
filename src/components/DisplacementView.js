import React, { useState } from 'react';
import { getCarsByDisplacement } from '../services/carService';

function DisplacementView() {
  const [displacement, setDisplacement] = useState('');
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const result = await getCarsByDisplacement(displacement);
      console.log(result); // Логируем результат для отладки
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
      <h2>Перегляд усіх автомобілів за об'ємом двигуна (displacement)</h2>
      <input
        type="text"
        placeholder="Введіть об'єм двигуна"
        value={displacement}
        onChange={(e) => setDisplacement(e.target.value)}
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

export default DisplacementView;