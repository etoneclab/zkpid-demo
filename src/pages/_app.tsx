import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme } from "../generalAssets/Themes/Theme";
import createEmotionCache from "../createEmotionCache";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import nextI18NextConfig from "../../next-i18next.config";
import dynamic from "next/dynamic";
import Header from '../components/header'

const clientSideEmotionCache = createEmotionCache();


export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
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
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Header />
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
