import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ latitude, longitude }) {
  return (
    <div style={{ height: 200, width: 184 }}>
      <GoogleMapReact bootstrapURLKeys={{ key: 'google map api key here..' }}>
        <AnyReactComponent lat={latitude} lng={longitude} text='Marker' />
      </GoogleMapReact>
    </div>
  );
}
