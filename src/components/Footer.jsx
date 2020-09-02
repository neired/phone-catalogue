import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className="footer text-secondary">
      <Link to="/" className="footer__link title text-light">Phone Catalogue</Link>
      <p className="text text-center text-light">2020 | Created with <img src="/assets/icons/heart-regular.svg" alt="love" className="far"></img> by Natalia Millán Sahún</p>

    </footer>
  )
}

export default Footer;