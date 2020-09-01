import React from 'react';

const Error = props => {
  const { error } = props;
  return (
    <div className="card detail">
      <h2 className="title-secondary title pb-20 text-color-secondary">Oops!</h2>
      <p className="text text primary">{error}</p>
    </div>
  )
};

export default Error;