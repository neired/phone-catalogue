import React from "react";
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard.jsx';
class PhoneCatalogue extends React.Component {
  render() {
    const {phones} = this.props;
    return (
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
    )

  }
}
export default PhoneCatalogue;