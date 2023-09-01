import React from 'react';

export default function CheckBox(props) {
  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        onChange={(e) => {
          props.setShowMarker(e.target.checked);
        }}
      />{' '}
      Show the coords location in google map
    </label>
  );
}
