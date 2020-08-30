import React from 'react';

const PhoneCard = props => {
  const { name, price, imageFileName, manufacturer } = props;
  return (
    <>
      <img className="card__img" src={imageFileName} alt={name}></img>
      <div className="card__info-container">
        <h3 className="card__name"><b>{manufacturer}</b> {name}</h3>
        <div className="card__price">{price}</div>
      </div>
    </>
  )
}

export default PhoneCard;