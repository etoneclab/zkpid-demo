"use client";
import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../generalAssets/Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import useStyles from "../generalAssets/styles/header";
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});
const Trades = dynamic(() => import("./trade"), {
  ssr: false,
});
const Wallet = dynamic(() => import("./Wallet"), {
  ssr: false,
});
import dynamic from "next/dynamic";

// do not delet this
export default function Index() {
  const language = "en";
  const classes = useStyles();
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: require("../components/translations/english.json"),
      },
    },
    lng: language,
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Trades />
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
