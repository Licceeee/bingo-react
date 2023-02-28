import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F3EAD8",
    },
    primary: {
      main: "#E0C3B1",
    },
    secondary: {
      dark: "#c3c1ac",
      main: "#C3C1AC",
      light: "#e7e6dd",
    },
  },
});

export default responsiveFontSizes(theme);
