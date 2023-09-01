import React from 'react';

export default function index(props) {
  const { value, onClick } = props;
  return (
    <button className='button is-success is-light' onClick={onClick}>
      {value}
    </button>
  );
}
