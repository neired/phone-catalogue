import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PhoneDetail = props => {
  const { routerProps, phones } = props;
  const phoneId = parseInt(routerProps.match.params.phoneId);
  const phone = phones.filter(phone => phone.id === phoneId);

  if (phone[0]) {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone[0];
    return (
      <div>
        <Link to="/" className="app__back">Volver</Link>
        <div>
          <div><img className="" src={`../assets/${imageFileName}`} alt={name}></img></div>
          <div className="">
            <h2 className="">{name}</h2>
              <p className="">{description}</p>
              <p className="">{manufacturer}</p>
              <p className="">{color}</p>
              <p className="">{price}</p>
              <p className="">{screen}</p>
              <p className="">{processor}</p>
              <p className="">{ram}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>Error: Phone not found</p>
    )
  }
}

export default PhoneDetail;