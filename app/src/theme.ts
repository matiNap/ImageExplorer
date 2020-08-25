import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3E92CC",
    },
    secondary: {
      main: "#FFFFFA",
    },
    text: {
      primary: "#2f2f2f",
      secondary: "#f2f2f2",
    },
  },
  typography: {
    fontFamily: ["Robot", "sans-serif"].join(),
    fontSize: 16,
  },
});

export const DISABLED = "rgba(0,0,0,0.3)";
