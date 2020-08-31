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
        <div className="detail card">
          <Link to="/" className="detail__back-icon text text-primary"><i class="fas fa-arrow-circle-left"></i></Link>
          <div><img className="detail__img" src={`/assets/${imageFileName}`} alt={name}></img></div>
          <div className="detail__info p-20">
            <p className="detail__price title text-light title-secondary">{price} €</p>
            <div className="detail__title pb-20 mx-0">
              <h2 className="text-dark title-secondary title mx-0">{name}</h2>
              <p className="text-grey text mx-0 title-tertiary">{manufacturer}</p>
            </div>
            <div className="detail__color-container pb-20">
              <p className="text-dark mx-0 text text-secondary">Color: </p>
              <div className={`bg-${color} detail__color-circle`}></div>
            </div>
            <p className="detail__description text text-dark text-primary pb-20">{description}</p>
            <div className="detail__specs-container">
              <div className="detail__spec p-10">
                <i className="fas fa-mobile-alt"></i>
                <p className="text text-grey uppercase text-secondary">Screen</p>
                <p className="detail__specs-text text-dark text text-secondary">{screen}</p>
              </div>
              <div className="detail__spec p-10">
                <i className="fas fa-microchip"></i>
                <p className="text text-grey uppercase text-secondary">Processor</p>
                <p className="detail__specs-text text-dark text text-secondary">{processor}</p>
              </div>
              <div className="detail__spec p-10">
                <i className="fas fa-memory"></i>
                <p className="text text-grey uppercase text-secondary">Ram</p>
                <p className="detail__specs-text text-dark text text-secondary">{ram}</p>
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