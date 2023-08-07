import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme } from "../generalAssets/Themes/Theme";
import createEmotionCache from "../createEmotionCache";
// import Wallet from "./about";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const clientSideEmotionCache = createEmotionCache();
const Wallet = dynamic(() => import("./Wallet"), {
  ssr: false,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [kycStarted, setKycStarted] = useState(false);
  console.log("app", kycStarted);
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "280px",
              marginLeft: "52px",
              marginRight: "49px",
            }}
          >
            <CssBaseline />
            <Component
              kycStarted={kycStarted}
              setKycStarted={setKycStarted}
              {...pageProps}
            />
            <Wallet kycStarted={kycStarted} />
          </div>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
