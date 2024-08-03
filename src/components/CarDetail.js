import React from 'react';

const CarDetail = ({ car }) => {
  if (!car) return <div>Виберіть автомобіль для перегляду деталей.</div>;

  return (
    <div className="car-detail">
      {car.fields.image && <img src={car.fields.image} alt={`${car.fields.make} ${car.fields.model}`} />}
      <h2>{car.fields.make} {car.fields.model}</h2>
      <p>Тип: {car.fields.type}</p>
      <p>Клас: {car.fields.class}</p>
      <p>Рік: {car.fields.year}</p>
      <p>Кількість дверей: {car.fields.doors}</p>
      <p>Кількість пасажирів: {car.fields.passengers}</p>
      <p>Тип палива: {car.fields.fuel}</p>
    </div>
  );
};

export default CarDetail;
