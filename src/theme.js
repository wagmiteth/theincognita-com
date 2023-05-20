// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a10e5', // Customize your primary color here
    },
    secondary: {
      main: '##FFFFFF', // Customize your secondary color here
    },
    additionalColor: {
      main: '#fff2e4', // Add your color here
    },
    text: {
      main: '#10162f', // Customize your secondary color here
    },
  },
  // Add more customization options if needed
});

export default theme;