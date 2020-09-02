import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoPhone from './NoPhone.jsx';
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: auto;
`;

const PhoneDetail = props => {
  const { routerProps, phones, loading } = props;
  const phoneId = parseInt(routerProps.match.params.phoneId);
  const phone = phones.filter(phone => phone.id === phoneId);

  if (phone.length === 0) {
    return (
      <NoPhone />
    )
  } else {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone[0];
    return (
      <main>
        <div className="loader">
          <DotLoader
            css={override}
            size={30}
            color={"#36D7B7"}
            loading={loading}
          />
        </div>
        <div className="detail card">
          <Link to="/" className="detail__back-icon text text-primary"><img src="/assets/icons/arrow-circle-left-solid.svg" alt="back to home" class="fas fa-arrow-circle-left"></img></Link>
          <div>
            {imageFileName ?
              <img className="detail__img" src={`/assets/${imageFileName}`} alt={name}></img> :
              <DotLoader
                css={override}
                size={30}
                color={"#36D7B7"}
                loading={loading}
              />
            }
          </div>
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
                <img src="/assets/icons/mobile-alt-solid.svg" alt="screen" className="fas"></img>
                <p className="text text-grey uppercase text-secondary">Screen</p>
                <p className="detail__specs-text text-dark text text-secondary">{screen}</p>
              </div>
              <div className="detail__spec p-10">
                <img src="/assets/icons/microchip-solid.svg" alt="processor" className="fas"></img>
                <p className="text text-grey uppercase text-secondary">Processor</p>
                <p className="detail__specs-text text-dark text text-secondary">{processor}</p>
              </div>
              <div className="detail__spec p-10">
                <img src="/assets/icons/memory-solid.svg" alt="ram" className="fas"></img>
                <p className="text text-grey uppercase text-secondary">Ram</p>
                <p className="detail__specs-text text-dark text text-secondary">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

PhoneDetail.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

export default PhoneDetail;