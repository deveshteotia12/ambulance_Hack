import * as React from 'react';
import Map from '../components/Map';
import { Box, Fab } from '@mui/material';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';
var socket;
export default function Ambulance() {
  const [latitude, setLatitude] = useState(12.817956);
  const [longitude, setLongitude] = useState(80.042304);
  const [roomID, setRoomID] = useState(null);

  React.useEffect(() => {
    socket = io('http://localhost:5000/');
    var rID = nanoid();
    setRoomID(rID);
    socket.emit('joinAmbulance', { id: roomID });
  }, []);

  React.useEffect(() => {
    // navigator.geolocation.getCurrentPosition(pos => {
    //   setLatitude(pos.coords.latitude);
    //   setLongitude(pos.coords.longitude);
    // });
    //  console.log('SENT');
    socket.emit('ambulanceData', { coordinates: [latitude, longitude], roomID });
  }, [latitude, longitude]);

  return (
    <>
      <Box sx={{ height: 1100, mb: 5 }}>
        <Map longitude={longitude} latitude={latitude} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Fab
          variant="extended"
          color="error"
          aria-label="add"
          sx={{ width: [200, 300, 400, 500], fontSize: 24, height: 60 }}
        >
          Start Critical Ride
        </Fab>
      </Box>
    </>
  );
}
