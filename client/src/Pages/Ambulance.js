import * as React from 'react';
import { Box, Typography, Container ,Button } from '@mui/material';

export default function Ambulance() {
   return (
      <Container maxWidth="xl" sx={{display:'flex' ,flexDirection:'column', alignItems: 'center', justifyContent: 'center'}} >
         <Box sx={{ mt: 5, mb: 5 ,textAlign: 'center' }}>
            <Typography variant="h4">Ambulance</Typography>
         </Box>
         <Box sx={{ height:600 , width: [300, 600, 800, 1100],mb:5,backgroundColor: 'gray'}}>
         </Box>
         <Button variant="contained" size="large" color="error" >Start Critical Ride</Button>
      </Container>
   );
}