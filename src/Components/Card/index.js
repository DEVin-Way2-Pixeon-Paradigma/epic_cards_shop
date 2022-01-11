import React from 'react';

function Card({type, image, name}) {
  return (
    <div className='item-card'>
      <img
        src={image}
        alt="Foto da carta"
        className='item-card-photo'
      />
      <span className="item-card-name">{name}</span>
      <span>{type}</span>
    </div>
  );
}

export default Card;