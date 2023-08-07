"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { connected, request } from "@/store/reducers/root";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/pools";
import { StartingKYC } from "./KYC";
import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../generalAssets/Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import Btn from "../components/common/Button";
import unlock from "../generalAssets/img/unlockIcon.svg";
import lock from "../generalAssets/img/lockedIcon.svg";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});
import dynamic from "next/dynamic";
interface PoolProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
const Pools: FC<PoolProps> = ({ kycStarted = false, setKycStarted }) => {
  const language = "en";
  const classes = useStyles();
  const [openKYC, setOpenKYC] = useState(false);
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

  async function getData() {
    setOpenKYC(true);
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: "unique session",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setToken(data.authToken);
      console.log("Res:", data);
    });
  }
  const onCancelKYC = () => {
    setOpenKYC(false);
    console.log("hey", openKYC);
  };
  {
    console.log("openKYC", openKYC);
  }
  const text = conn
    ? "Address connected ah35fnle0n2-xiw-2hd9endj4"
    : "Connect wallet";

  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {openKYC ? (
            <StartingKYC
              setKycStarted={setKycStarted}
              openKYC={openKYC}
              title={"Welcome to KYC check connection"}
              subTitle={"Thank you for choosing DEMO DEX!"}
              description={"What is it?"}
              onCancel={onCancelKYC}
            />
          ) : (
            <div className={classes.pools}>
              <Typography className={classes.title}>
                Access liquidity pools
              </Typography>

              <div className={classes.section1}>
                <Image src={unlock} alt="unlock" />
                <Btn text={"Permissionless"} />
                <Typography className={classes.title}>
                  Join pool but with access limit
                </Typography>
              </div>
              <div className={classes.section2}>
                <Image src={lock} alt="unlock" />

                <Btn text={"Permissioned"} onClick={getData} />
                <Typography className={classes.title}>
                  Access more liquidity pools by doing KYC check
                </Typography>
                {token ? (
                  <iframe src={"https://ui.idenfy.com/?authToken=" + token} />
                ) : null}
              </div>
            </div>
          )}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};
export default Pools;
