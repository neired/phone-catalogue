import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PhoneDetail = props => {
  const { routerProps, phones } = props;
  const phoneId = parseInt(routerProps.match.params.phoneId);
  const phone = phones.filter(phone => phone.id === phoneId);

  // refactor!
  if (phone[0]) {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone[0];
    return (
      <main>
        <Link to="/">Back</Link>
        <div className="detail card">
          <div><img className="detail__img" src={`/assets/${imageFileName}`} alt={name}></img></div>
          <div className="detail__info py-20">
            <div className="detail__title py-20">
              <h2 className="text-dark mx-0">{name}</h2>
              <p className="text-dark mx-0">{manufacturer}</p>
              <p className="text-dark mx-0">{price}</p>
            </div>
            <div className="detail__color-container">
              <p className="detail__color text-dark mx-0">Color: </p>
              <div className={`bg-${color} detail__color-circle mx-0`}></div>
            </div>
            <p className="detail__description text-dark py-20">{description}</p>
            <div className="detail__specs-container py-20">
              <div className="detail__spec">
                <i className="fas fa-mobile-alt"></i>
                <p className="detail__specs-text text-dark">{screen}</p>
              </div>
              <div className="detail__spec">
                <i className="fas fa-microchip"></i>
                <p className="detail__specs-text text-dark">{processor}</p>
              </div>
              <div className="detail__spec">
                <i className="fas fa-memory"></i>
                <p className="detail__specs-text text-dark">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  } else {
    return (
      <>
        <Link to="/">Back</Link>
        <div className="detail">
          <div><img className="detail__img" src='PLACEHOLDER!!!' alt='placeholder'></img></div>
          <div className="detail__info">
            <div className="detail__title">
              {/* que sea grisecito placeholder */}
            </div>
            <div className="detail__color-container">
              <div className="detail__color-circle"></div>
              <p className="detail__color"></p>
              {/* que sea grisecito placeholder / pensar bien lo del circulito con el color así pasado */}
            </div>
            <p className="detail__description">Sorry, we don't seem to have any phone with this id.</p> 
            <div className="detail__specs-container">
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{/* que sea grisecito placeholder */}</p>
              </div>
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{/* que sea grisecito placeholder */}</p>
              </div>
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{/* que sea grisecito placeholder */}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PhoneDetail;