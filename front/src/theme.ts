import { createMuiTheme } from "@material-ui/core";
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#09D3AC",
      dark: "#689F38",
      light: "#DCEDC8"
    },
    secondary: {
      main: "#FF5722"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    }
  }
});

export default theme;