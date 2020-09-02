import React from 'react';
import { Link } from 'react-router-dom';

const NoPhone = () => (
    <main>
      <div className="detail card">
        <Link to="/" className="detail__back-icon text text-primary"><i class="fas fa-arrow-circle-left"></i></Link>
        <div className="detail__info p-20">
          <p className="detail__price title text-light title-secondary">:(</p>
          <div className="detail__title pb-20 mx-0">
            <h2 className="text-dark title-secondary title mx-0">Sorry, we can't find what you are looking for.</h2>
          </div>
          <p className="detail__description text text-grey text-primary pb-20">For some reason, the phone id you are searching for doesn't exist... yet!</p>
        </div>
      </div>
    </main>
  );

  export default NoPhone;