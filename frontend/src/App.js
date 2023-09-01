import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import Input from './components/Input';
import Button from './components/Button';
import Map from './components/Map';

import { converter } from './utils/converter';
import { API_SERVER } from './config/constants';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [dmslatitude, setDmslatitude] = useState(0);
  const [dmslongitude, setDmslongitude] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const convertLatLang = () => {
    const lat_lang = converter(latitude, longitude);
    setDmslatitude(lat_lang.dms_lat);
    setDmslongitude(lat_lang.dms_lang);
  };

  const saveToDB = () => {
    try {
      axios
        .post(API_SERVER + 'coords/add', {
          lat: latitude,
          lng: longitude,
          notes: {
            dms_lat: dmslatitude,
            dms_lng: dmslongitude,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.status) {
            alert(response.data);
          } else {
            alert(response.statusText);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='App'>
      <div className='converter-container'>
        <div className='latlong-container'>
          <Input
            name='Latitude'
            setLatLong={setLatitude}
            inputValue={latitude}
          />
          <Input
            name='Longitude'
            setLatLong={setLongitude}
            inputValue={longitude}
          />
        </div>
        <div className='latlong-container'>
          <Input name='DMS Latitude' readOnly inputValue={dmslatitude} />
          <Input name='DMS Longitude' readOnly inputValue={dmslongitude} />
        </div>
        <Button value='Convert' onClick={convertLatLang} />
        <Button value='Save to DB' onClick={saveToDB} />
        <Button value='Show Map' onClick={() => setShowMap(true)} />
        {showMap === true ? (
          <Map latitude={latitude} longitude={longitude} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
