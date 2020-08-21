import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3E92CC",
    },
    secondary: {
      main: "#1E1E24",
      light: "#292930",
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#2f2f2f",
    },
  },
  typography: {
    fontFamily: ["Robot", "sans-serif"].join(),
    fontSize: 16,
  },
});
