import React from 'react';

const PhoneCard = props => {
  const { name, price, imageFileName, manufacturer } = props;
  return (
    <>
      <img className="card__img" src={`/assets/${imageFileName}`} alt={name}></img>

      <div className="card__info-container pb-20">
        <h3 className="card__name text-dark text"><b>{manufacturer}</b> {name}</h3>
        <div className="card__price text-light title">{price} €</div>
      </div>
    </>
  )
}

export default PhoneCard;