import React from 'react';

const Error = props => {
  const { error } = props;
  return (
    <div className="card error__card">
      <h2 className="title-secondary title pb-20 text-color-secondary">Oops!</h2>
      <p className="detail__error-tag title text-light title-tertiary">:(</p>
      <p className="text text primary">{error}</p>
    </div>
  )
};

export default Error;