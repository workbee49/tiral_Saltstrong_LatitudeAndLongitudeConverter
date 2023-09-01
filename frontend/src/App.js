import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Input from './components/Input';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Map from './components/Map';

import { converter } from './utils/converter';
import { API_SERVER } from './config/constants';

import { Tampa_Bay } from './config/constants';

function App() {
  const [latitude, setLatitude] = useState(Tampa_Bay.lat);
  const [longitude, setLongitude] = useState(Tampa_Bay.lng);
  const [dmslatitude, setDmslatitude] = useState(0);
  const [dmslongitude, setDmslongitude] = useState(0);
  const [showMarker, setShowMarker] = useState(false);

  useEffect(() => {
    convertLatLang();
  }, []);

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
      <div className='converter-container card'>
        <div className='latlong-container'>
          <Input
            name='Latitude'
            type='number'
            setLatLong={setLatitude}
            inputValue={latitude}
          />
          <Input
            name='Longitude'
            type='number'
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
        <CheckBox setShowMarker={setShowMarker} />
        <Map lat={latitude} lng={longitude} showMarker={showMarker} />
      </div>
    </div>
  );
}

export default App;
