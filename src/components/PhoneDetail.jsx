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
      <>
        <Link to="/">Back</Link>
        <div className="detail">
          <div><img className="detail__img" src={`../assets/${imageFileName}`} alt={name}></img></div>
          <div className="detail__info">
            <div className="detail__title">
              <h2 className="">{name}</h2>
              <p className="">{manufacturer}</p>
              <p className="">{price}</p>
            </div>
            <div className="detail__color-container">
              <div className="detail__color-circle"></div>
              <p className="detail__color">{color}</p>
            </div>
            <p className="detail__description">{description}</p>
            <div className="detail__specs-container">
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{screen}</p>
              </div>
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{processor}</p>
              </div>
              <div>
                <div className="detail__specs-icon"></div>
                <p className="detail__specs-text">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </>
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