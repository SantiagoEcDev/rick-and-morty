import React from 'react';
import './LocationCard.css';

const LocationCard = ({ location }) => {
  return (
    <article className="location__card">
      <div className="location__card--info">
        <h2>{location.name}</h2>
        <p><strong>Type:</strong> {location.type}</p>
        <p><strong>Dimension:</strong> {location.dimension}</p>
        <p><strong>Residents:</strong> {location.residents.length}</p>
      </div>
    </article>
  );
};

export default LocationCard;
