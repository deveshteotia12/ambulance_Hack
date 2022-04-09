import * as React from 'react';
import Map from '../components/Map'
import { Box, Typography, Container ,Button } from '@mui/material';

export default function Ambulance() {
   return (
      <Container maxWidth="xl" sx={{display:'flex' ,flexDirection:'column', alignItems: 'center', justifyContent: 'center'}} >
         <Box sx={{ mt: 5, mb: 5 ,textAlign: 'center' }}>
            <Typography variant="h4">Ambulance</Typography>
         </Box>
         <Box sx={{ height:1000 , width: [900, 900, 900, 1700],mb:5}}>
            <Map/>
         </Box>
         <Button variant="contained" size="large" color="error" >Start Critical Ride</Button>
      </Container>
   );
}