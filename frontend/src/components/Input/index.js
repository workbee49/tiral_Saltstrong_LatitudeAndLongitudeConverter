import React, { useState } from 'react';
import styles from './input.module.scss';

export default function Input(props) {
  const { name, readOnly, setLatLong, inputValue } = props;
  return (
    <div className={styles.input_container}>
      {name}
      <input
        type='text'
        className='input is-primary'
        readOnly={readOnly}
        disabled={readOnly}
        value={inputValue}
        onChange={(e) => setLatLong(e.target.value)}
      />
    </div>
  );
}
