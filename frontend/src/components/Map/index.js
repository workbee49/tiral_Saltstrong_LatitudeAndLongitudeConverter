import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapComponent = (props) => {
  const { lat, lng, showMarker } = props;
  const [markerLocation, setMarkerLocation] = useState({
    lat,
    lng,
  });

  // Update marker location
  const handleMarkerDragEnd = (e) => {
    setMarkerLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  useEffect(() => {
    setMarkerLocation({ lat, lng });
  }, [props]);

  return (
    <LoadScript googleMapsApiKey='Google map API key'>
      <GoogleMap
        id='example-map'
        mapContainerStyle={{ height: '400px', width: '422px' }}
        zoom={13}
        center={markerLocation}
      >
        {showMarker && (
          <MarkerF
            id='marker'
            position={markerLocation}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
