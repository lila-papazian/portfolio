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
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(90deg, #7700ea, #6d19e9, #6426e7, #5a2fe5, #5035e3, #463be0, #3c3fdd, #3243da, #2846d6, #1c49d2, #104cce, #004eca)',
          backgroundClip: "text",
          textFillColor: "transparent"
        }
      },
    }
  }

});

export default theme;