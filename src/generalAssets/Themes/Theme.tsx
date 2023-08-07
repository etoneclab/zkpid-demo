"use client";

import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
function customBorderTransform(value: any) {
  // Create a dynamic border string using the value from the theme
  return `${value}px solid black`;
}
const primaries = {
  50: "#F0E3FF",
  100: "#DEE1F8",
  200: "#6D78C7",
  300: "#CA9FFF",
  400: "#BC88FF",
  500: "#AF70FF",
  600: "#A258FF",
  700: "#7A42BF",
  800: "#512C80",
  900: "#291640",
};
const secondaries = {
  50: "#CBFFEC",
  100: "#BCC1E5",
  200: "#888888",
  300: "#2FFFB4",
  400: "#29DF9E",
  500: "#23BF87",
  600: "#1D9F71",
  700: "#18805A",
  800: "#126044",
  900: "#0C402D",
};
export const theme = createTheme({
  spacing: [0, 2, 4, 8, 12, 16, 24, 32, 48, 56, 64, 96, 128, 160, 256, 296],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440,
    },
  },
  palette: {
    common: {
      black: "#08141E",
      // inputLabel: '#626782',
    },
    primary: {
      light: "#F0E3FF",
      main: "#6D78C7",
      dark: "#291640",
      contrastText: "#FFFFFF",
      50: "#F0E3FF",
      100: "#DEE1F8",
      200: "#6D78C7",
      300: "#CA9FFF",
      400: "#BC88FF",
      500: "#AF70FF",
      600: "#A258FF",
      700: "#7A42BF",
      800: "#512C80",
      900: "#291640",
    },
    secondary: {
      light: "#CBFFEC",
      main: "#2FFFB4",
      dark: "#0C402D",
      contrastText: "#08141E",
    },

    grey: {
      50: " #fafafa",
      100: " #f5f5f5",
      200: " #eeeeee",
      400: " #bdbdbd",
      500: " #9e9e9e",
      600: " #757575",
      700: " #616161",
      800: " #424242",
      900: " #212121",
      A100: "#8C8C8C",
    },
    error: {
      main: "#FF365E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    action: {
      active: " rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: " rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    text: {
      primary: "#08141E",
      secondary: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",

    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 300,
      fontSize: "96px",
      lineHeight: "112px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "60px",
      lineHeight: "72px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "56px",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "34px",
      lineHeight: "36px",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "24px",
      letterSpacing: "0.18px",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "0.15px",
    },
    body1: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: " 12px",
      fontWeight: 400,
      lineHeight: " 24px",
      letterSpacing: " 0.15px",
    },
    // set: {
    //   fontFamily: "'Source Sans Pro', sans-serif",
    //   fontWeight: 400,
    //   fontSize: '12px',
    //   lineHeight: '18px',
    // },
    body2: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "1.25px",
      textTransform: "none",
    },
    caption: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: "10px",
      lineHeight: "16px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8,
  },
  unstable_sxConfig: {
    border: {
      themeKey: "borders",
      transform: customBorderTransform, // Using the customBorderTransform function
    },
    borderColor: {
      themeKey: "palette",
      // Replace with the desired color for borderColor
    },
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.20)",
    "0px 4px 54px #BCC1E5",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
    "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.06)",
    "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.06)",
    "0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.06)",
    "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.06)",
    "0px 12px 24px rgba(0, 0, 0, 0.1), 0px 24px 48px rgba(0, 0, 0, 0.06)",
    "0px 16px 32px rgba(0, 0, 0, 0.1), 0px 32px 64px rgba(0, 0, 0, 0.06)",
    "0px 20px 40px rgba(0, 0, 0, 0.1), 0px 40px 80px rgba(0, 0, 0, 0.06)",
    "0px 25px 50px rgba(0, 0, 0, 0.1)",
    "0px 0px 10px rgba(0, 0, 0, 0.15), 0px 5px 5px rgba(0, 0, 0, 0.12)",
    "0px 0px 20px rgba(0, 0, 0, 0.15), 0px 10px 10px rgba(0, 0, 0, 0.12)",
    "0px 0px 40px rgba(0, 0, 0, 0.2)",
    "0px 4px 54px #BCC1E5",
    "0px 6px 10px rgba(0, 0, 0, 0.08), 0px 1px 18px rgba(0, 0, 0, 0.08), 0px 3px 5px rgba(0, 0, 0, 0.12)",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
    "none",
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 4px 54px #BCC1E5",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
  ],
});

// export default function ThemeRegistry({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </NextAppDirEmotionCacheProvider>
//   );
// }
