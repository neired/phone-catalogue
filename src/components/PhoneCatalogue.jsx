import React from "react";
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard.jsx';
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class PhoneCatalogue extends React.Component {
  render() {
    const {phones, loading} = this.props;
    return (
      <main>
      <GridLoader
        css={override}
        size={30}
        color={"#36D7B7"}
        loading={loading}
      />
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
export default PhoneCatalogue;