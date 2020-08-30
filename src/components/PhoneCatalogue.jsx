import React from "react";
import { Link } from 'react-router-dom';

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
                {phone.name}
              </Link>
            </li>
            )}
          )}
      </ul>
    )

  }
}
export default PhoneCatalogue;