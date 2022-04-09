import * as React from 'react';
import Map from '../components/Map'
import { Box } from '@mui/material';

function User() {
   return (
      <Box sx={{ height: 1100, mb: 5 }}>
            <Map user="user"/>
         </Box>
   )
}

export default User