import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import '../App.css'; 


import appleLogo from '../assets/apple-logo.png';
import googleLogo from '../assets/google-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';

const SignupPage = () => {
  return (
    <Box className="signup-page">
      <Box className="signup-container">
        
        {/* Create Account Heading */}
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          style={{ 
            fontWeight: '600', 
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            marginBottom: '20px',
          }}>
          Create Account
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
        Already have an account? <a href="/signup">Login</a>
        </Typography>
        
        {/* Google, Microsoft, and Apple buttons */}
        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <img src={googleLogo} alt="Google Logo" style={{ width: '20px', marginRight: '8px' }} />
          Continue with Google
        </Button>

        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <img src={microsoftLogo} alt="Microsoft Logo" style={{ width: '20px', marginRight: '8px' }} />
          Continue with Microsoft Account
        </Button>

        <Button 
          variant="outlined" 
          sx={{ 
            width: '100%', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <img src={appleLogo} alt="Apple Logo" style={{ width: '20px', marginRight: '8px' }} />
          Continue with Apple
        </Button>

      </Box>
    </Box>
  );
};

export default SignupPage;