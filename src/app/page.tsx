"use client";
import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
// import { DEX } from "../components/dex";
// import { MENU } from "../pages/Header";
// import { WALLET } from "../components/wallet";
import Index from "@/pages";
import { theme } from "../generalAssets/Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "i18next";
import { appWithTranslation } from "next-i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
function Home() {
  const language = "en";

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
        <main>
          <Index />
        </main>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default Home;
