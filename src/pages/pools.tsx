"use client";

import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/pools";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../generalAssets/Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "i18next";
import { appWithTranslation } from "next-i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});
import dynamic from "next/dynamic";
const Pools = () => {
  const language = "en";
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);
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

  const handleConnect = () => {};
  const onCancel = () => {};
  const text = conn
    ? "Address connected ah35fnle0n2-xiw-2hd9endj4"
    : "Connect wallet";
  console.log(conn);
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <div className={classes.pools}>
            <Typography variant="h5" noWrap component="a" href="">
              Pool
            </Typography>

            <div className={classes.section1}>bitCoin</div>
            <div className={classes.section2}>
              <Typography variant="h4" className={classes.title}>
                swap
              </Typography>
              <Typography variant="h6" className={classes.subTitle}>
                Easy way to trade your tokens
              </Typography>
              <div className={classes.convertSection}>
                <div className={classes.fromSection}>from</div>
                <div className={classes.toSection}>to</div>
              </div>
              <div>
                <Typography
                  variant="button"
                  className={classes.connectBtn}
                  onClick={handleConnect}
                >
                  {text}
                </Typography>
                <ConnectionModal open={open} onCancel={onCancel} />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};
export default Pools;
