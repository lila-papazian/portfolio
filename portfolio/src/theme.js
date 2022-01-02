import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: '#212121',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#003f5c'
    }
  },
  padding: 0,
});

export default theme;