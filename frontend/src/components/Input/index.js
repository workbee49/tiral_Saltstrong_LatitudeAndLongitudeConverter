import React from 'react';
import styles from './input.module.scss';

export default function Input(props) {
  const { name, type = 'text', readOnly, setLatLong, inputValue } = props;
  return (
    <div className={styles.input_container}>
      {name}
      <input
        type={type}
        className='input is-primary'
        readOnly={readOnly}
        disabled={readOnly}
        value={inputValue}
        onChange={(e) => setLatLong(parseFloat(e.target.value))}
      />
    </div>
  );
}
