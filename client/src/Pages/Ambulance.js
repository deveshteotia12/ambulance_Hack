import * as React from 'react';
import Map from '../components/Map'
import { Box, Typography, Container, Button, Fab } from '@mui/material';
export default function Ambulance() {
   const [selected, setSelected] = React.useState(true);
   const [lat, setLat] = React.useState(null);
   const [lng, setLng] = React.useState(null);
   const [status, setStatus] = React.useState(null);

   const getLocation = () => {
      if (!navigator.geolocation) {
         setStatus('Geolocation is not supported by your browser');
      } else {
         setStatus('Locating...');
         navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
         }, () => {
            setStatus('Unable to retrieve your location');
         });
      }

      console.log(lat,lng);
   }

   return (
      <>
         <Box sx={{ height: 1100, mb: 5 }}>
            <Map />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Fab variant="extended" color="error" aria-label="add" sx={{ width: [200, 300, 400, 500], fontSize: 24, height: 60 }} onClick={getLocation}>
               Start Critical Ride
            </Fab>
         </Box>
      </>
   );
}