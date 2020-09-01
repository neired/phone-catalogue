import React from 'react';
import PropTypes from 'prop-types';

const PhoneCard = props => {
  const { name, price, imageFileName, manufacturer } = props;
  return (
    <>
      <img className="card__img" src={`/assets/${imageFileName}`} alt={name}></img>
      <div className="card__info-container pb-20">
        <h2 className="text-dark text text-center title-tertiary">{name}</h2>
        <p className="pb-20 text-grey text text-center">{manufacturer}</p>
        <p className="card__price text-light title title-tertiary">{price} €</p>
      </div>
    </>
  )
}

PhoneCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageFileName: PropTypes.string,
  manufacturer: PropTypes.string
};

export default PhoneCard;