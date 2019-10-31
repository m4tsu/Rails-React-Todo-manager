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
      main: "#FF5722",
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    }
  },
  typography: {
    fontSize: 12
  },
  overrides: {
    MuiExpansionPanelDetails: {
      root: {
        padding: '8px 24px 16px'
      }
    },
    MuiExpansionPanelSummary: {
      content: {
        alignItems: 'center',
        margin: '10px 0!important'
      },
    },
    MuiFormControl: {
      root: {
        width: '100%'
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: '#ffffff'
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '14px 14px'
      },
      inputSelect: {
        paddingRight: '34px'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1rem'
      }
    }
  }
});

export default theme;