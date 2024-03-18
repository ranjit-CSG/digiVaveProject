import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50px',
      backgroundColor: 'white',
    }}>
      <Typography variant="body2" color="#116587" align="center">
      © 2024 - Creative Synergies Group
      </Typography>
    </Box>
  );
};

export default Footer;
