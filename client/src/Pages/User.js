import * as React from 'react';
import { Box, Typography, Container ,Button } from '@mui/material';

function User() {
   return (
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
         <Box sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
            <Typography variant="h4">User</Typography>
         </Box>
         <Box sx={{ height: 600, width: [300, 600, 800, 1100], mb: 5, backgroundColor: 'gray' }}>
         </Box>
      </Container>
   )
}

export default User