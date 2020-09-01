import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard.jsx';
import Error from './Error.jsx';
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: auto;
`;
class PhoneCatalogue extends React.Component {
  render() {
    const {phones, loading, error} = this.props;
    return (
      <main>
        <div className="loader">
          <GridLoader
            css={override}
            size={30}
            color={"#36D7B7"}
            loading={loading}
          />
        </div>
        {error && <Error error={error}/>}
        <ul className="card__list">
          {phones
            .map((phone, i) => {
              return ( 
              <li className="card" id={phone.id} key={phone.id}>
                <Link to={`/phone-detail/${phone.id}`} className="card__link">
                  <PhoneCard
                    name={phone.name}
                    price={phone.price}
                    imageFileName={phone.imageFileName}
                    manufacturer={phone.manufacturer}
                  />
                </Link>
              </li>
              )}
            )}
        </ul>
      </main>
    )

  }
}

PhoneCatalogue.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

export default PhoneCatalogue;