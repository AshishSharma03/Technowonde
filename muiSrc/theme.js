
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4A93FE",
    },
    secondary: {
      main: '#4A93FE',
    },
    error: {
      main: red.A400,
    },
    success:{
      main: "#75A88A"
    }
  },

});

export default theme;
