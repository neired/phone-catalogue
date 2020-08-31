import React from 'react';

const PhoneCard = props => {
  const { name, price, imageFileName, manufacturer } = props;
  return (
    <>
      <img className="card__img" src={`/assets/${imageFileName}`} alt={name}></img>

      <div className="card__info-container">
        <h3 className="card__name text-dark"><b>{manufacturer}</b> {name}</h3>
        <div className="card__price text-primary">{price}</div>
      </div>
    </>
  )
}

export default PhoneCard;