import React from 'react';

const PhoneCard = props => {
  const { name, price, imageFileName } = props;
  return (
    <>
      <img className="" src={imageFileName} alt={name}></img>
      <div className="">
        <h3 className="">{name}</h3>
        <div className="">{price}</div>
      </div>
    </>
  )
}

export default PhoneCard;