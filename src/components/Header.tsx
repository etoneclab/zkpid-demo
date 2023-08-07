"use client";
import Image from "next/image";
import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/header";
import { ConnectionModal } from "./common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";
import { useSelector } from "react-redux";
import nave from "../generalAssets/img/nav.svg";
export default () => {
  const [selected, setSelected] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");

  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();

  const handleCloseNavMenu = () => {
    console.log("responsive feature");
  };
  const handleConnect = async () => {
    setOpen(true);
    store.dispatch(request({ connection: true }));
  };
  const onCancel = () => {
    setOpen(false);
  };
  const pages = [
    {
      text: "trade",
      link: ["/"],
    },

    {
      text: "Pools",
      link: ["/pools"],
    },
  ];
  const handleSelect = (item: any) => {
    setSelected(pages?.indexOf(item));
    router.push(item?.link[0]);
    console.log(pages?.indexOf(item));
    console.log(selected);
  };
  const conn = useSelector((state: any) => state.auth.connected);

  console.log(conn);
  return (
    <div className={classes.header}>
      <Typography variant="h5" noWrap component="a" href="/">
        DEMO DEX
      </Typography>
      {pages.map((page, index) => (
        <MenuItem key={index} onClick={handleCloseNavMenu}>
          <Typography
            align="center"
            onClick={() => {
              handleSelect(page);
            }}
            variant={selected == index ? "caption" : "subtitle1"}
          >
            {page.text}
          </Typography>
        </MenuItem>
      ))}
      <div className={classes.connectBtnWrapper}>
        {conn ? (
          <>
            <Typography
              variant="body1"
              className={classes.connectedBtn}
              onClick={handleConnect}
            >
              Address connected
              <br />
              ah35fnle0n2-xiw-2hd9endj4
            </Typography>
            <Image src={nave} alt="" />
          </>
        ) : (
          <>
            <Typography
              variant="button"
              className={classes.connectBtn}
              onClick={handleConnect}
            >
              Connect wallet
            </Typography>
          </>
        )}

        <ConnectionModal
          open={open}
          onCancel={onCancel}
          title="Wallet connection"
          description="The DEX wants to connect with your wallet. Do you want to continue?"
          imgSrc={null}
        />
      </div>
      <div className={classes.testWrapper}>
        <div className={classes.test}></div>
      </div>
    </div>
  );
};
// do not delet this
// ("use client");
// import { NextAppDirEmotionCacheProvider } from "../generalAssets/Themes/EmotionCache";
// import CssBaseline from "@mui/material/CssBaseline";
// // import { DEX } from "../components/dex";
// // import { MENU } from "../pages/Header";
// // import { WALLET } from "../components/wallet";
// import Index from "@/pages";
// import { theme } from "../generalAssets/Themes/Theme";
// import { ThemeProvider } from "@mui/material/styles";
// import i18n from "i18next";
// import { appWithTranslation } from "next-i18next";
// import { initReactI18next } from "react-i18next";
// import nextI18NextConfig from "../../next-i18next.config";
// function Home() {
//   const language = "en";

//   i18n.use(initReactI18next).init({
//     resources: {
//       en: {
//         translation: require("../components/translations/english.json"),
//       },
//     },
//     lng: language,
//     fallbackLng: nextI18NextConfig.i18n.defaultLocale,
//     interpolation: {
//       escapeValue: false,
//     },
//   });

//   return (
//     <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <main>
//           <Index />
//         </main>
//       </ThemeProvider>
//     </NextAppDirEmotionCacheProvider>
//   );
// }

// export default Home;
