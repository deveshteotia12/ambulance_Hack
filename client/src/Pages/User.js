import * as React from 'react';
import Map from '../components/Map';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box } from '@mui/material';
var socket;

function User() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ambulanceData, setAmbulance] = useState([]);
  React.useEffect(() => {
    socket = io('http://localhost:5000/');
    // socket.emit('joinAmbulance', { id: rID });
  }, []);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
    console.log(latitude);
    if (latitude !== null && longitude !== null) socket.emit('carData', { coordinates: [latitude, longitude] });
  }, [latitude, longitude]);

  React.useEffect(() => {
    socket.on('ambData', data => {
      console.log('I am listening');
      // console.log(data);
      setAmbulance([...ambulanceData, data]);
    });
  });

  return (
    <Box sx={{ height: 1100, mb: 5 }}>
      <Map user="user" ambulanceData={ambulanceData} longitude={longitude} latitude={latitude} />
    </Box>
  );
}

export default User;
