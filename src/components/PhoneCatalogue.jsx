import React from "react";
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard.jsx';
class PhoneCatalogue extends React.Component {
  render() {
    const {phones} = this.props;
    return (
      <ul>
        {phones
          .map((phone, i) => {
            return ( 
            <li id={phone.id} key={phone.id}>
              <Link to={`/phone-detail/${phone.id}`}>
                <PhoneCard
                  name={phone.name}
                  price={phone.price}
                  imageFileName={phone.imageFileName}
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