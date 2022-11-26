import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const rem = (pixel, defaultSize = 16) => `${pixel / defaultSize}rem`;

const brandColor = {
  grey: "#343333",
  green: "#8dc63f",
  blue: "#009ad7",
  yellow: "#fdb913",
  orange: "#f15a22",
  white: "#fefefe",
  background: "#f4f5f6",
};

let theme = createTheme({
  spacing: 8, // theme.spacing(2); `${8 * 2}px` = '16px'
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  palette: {
    primary: {
      main: "#0b143a",
    },
    secondary: {
      main: "#e1a03b",
    },
    background: {
      primaryContrast: "#fff",
      grey: "#f7f9fc",
    },
    text: {
      primary: "#fff",
      black: "#000",
    },
    shadow: {
      header: "0 0 16px 0 rgba(0, 0, 0, 0.15)",
    },
    brand: {
      ...brandColor,
    },
  },
  mixins: {
    rem,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body,html {
          font-family: 'Open Sans', sans-serif;
          margin: 0;
        }
      `,
    },
  },
});
export default theme = responsiveFontSizes(theme);
