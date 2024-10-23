import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import '../App.css'; // Assuming App.css is where your styles will be

// Import logos
import appleLogo from '../assets/apple-logo.png';
import googleLogo from '../assets/google-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';

const LoginPage = () => {
  return (
    <Box className="login-page">
      <Box className="login-container">
        
        {/* Welcome Back Heading */}
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{
            fontWeight: '600', 
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            marginBottom: '20px',
          }}
        >
          Welcome back
        </Typography>
        
        {/* Email Field */}
        <TextField 
          fullWidth 
          label="Email address or phone number" 
          margin="normal" 
        />
        
        {/* Continue Button */}
        <Button
          className="login-button"
          variant="contained"
          sx={{
            backgroundColor: '#FF6500',
            margin: '20px 0',
            '&:hover': {
              backgroundColor: '#FF5500',
            }
          }}
        >
          Continue
        </Button>

        <Typography align="center" variant="body2" sx={{ marginBottom: '20px' }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </Typography>
        
        {/* Google, Microsoft, and Apple buttons in a column */}
        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '10px 0',  // Make button taller
            textTransform: 'none', // Remove uppercase text
          }}
        >
          <img src={googleLogo} alt="Google Logo" style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
          Continue with Google
        </Button>

        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '10px 0',  // Make button taller
            textTransform: 'none', // Remove uppercase text
          }}
        >
          <img src={microsoftLogo} alt="Microsoft Logo" style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
          Continue with Microsoft Account
        </Button>

        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '10px 0',  // Make button taller
            textTransform: 'none', // Remove uppercase text
          }}
        >
          <img src={appleLogo} alt="Apple Logo" style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
          Continue with Apple
        </Button>

      </Box>
    </Box>
  );
};

export default LoginPage;