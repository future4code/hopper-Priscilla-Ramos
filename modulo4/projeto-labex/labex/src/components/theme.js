import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8561c5',
      main: '#3d5afe',
      dark: '#482880',
 
    },
    secondary: {
      light: '#ffee33',
      main: '#ffea00',
     
      contrastText: '#b2a300',
    },
  },
});

export default theme;