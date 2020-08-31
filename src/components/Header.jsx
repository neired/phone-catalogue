import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="header">
      <Link to="/" className="header__title text-dark text-center">
        <h1 className="title title-primary">Phone Catalogue</h1>
      </Link>
    </header>
  )
}

export default Header;