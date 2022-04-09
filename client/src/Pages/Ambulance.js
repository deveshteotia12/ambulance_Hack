import * as React from 'react';
import Map from '../components/Map'
import { Box, Typography, Container, Button, Fab } from '@mui/material';
export default function Ambulance() {
   const [selected, setSelected] = React.useState(true);
   return (
      <>
         <Box sx={{ height: 1100, mb: 5 }}>
            <Map />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Fab variant="extended" color="error" aria-label="add" sx={{width:[200,300,400,500],fontSize:24,height:60}}>
            Start Critical Ride
            </Fab>
         </Box>
      </>
   );
}