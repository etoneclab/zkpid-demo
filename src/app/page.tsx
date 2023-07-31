"use client";
import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { DEX } from "../components/dex";
import { MENU } from "../components/Header";
import { WALLET } from "../components/wallet";
import { theme } from "../generalAssets/Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "i18next";
import { appWithTranslation } from "next-i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
function Home() {
  const language = localStorage.getItem("language") || "en";

  i18n.use(initReactI18next).init({
    resources: {
      // Update the resources here based on next-i18next configuration.
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
          <MENU />
          <section>
            <DEX />
          </section>
          <section>
            <WALLET />
          </section>
        </main>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default Home;
