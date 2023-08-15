import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeColors = {
  primary: "#08c177",
  secondary: "#134c5d",
  tertiray: "#276ec0",
  success: "#57CA22",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#000",
  white: "#ffffff",
  primaryAlt: "#000C57",
};

// Create a custom theme using the createTheme function
const theme: ThemeOptions = createTheme({
  palette: {
    common: {
      black: themeColors.black,
      white: themeColors.white,
    },
    primary: {
      main: themeColors.primary,
      contrastText: themeColors.white,
    },
    secondary: {
      main: themeColors.secondary,
      contrastText: themeColors.white,
    },
    error: {
      main: themeColors.error,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
});

export default theme;
