"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/Header";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cred='eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL2V4YW1wbGVzL3YxIl0sImlkIjoiZWY4MWM0ODMtMmE5Ny00ZTE3LWJmZGUtOWQ5MzMwNjVhYTFkIiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIkt5YyBBdHRlc3RhdGlvbiJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ6a3AiOiI3bVhGZlF3cUUxUkRWcDk2OGhCeFpNTW5VZXZCdFlUOEhjZDN5dXRleFRkZ0VLUUhVQzYxRzk2RkIzRzlHeGVaczFQa1N5WFo0WkRDQmZ1eHBWWU50cmVtd05QUDhGZ2giLCJ3YWxsZXQtYWRkcmVzcyI6IkI2Mjg5Mjg4MTk4MjkzODg5MTIzMzExIiwibmF0aW9uYWxpdHkiOiJMVCIsImlkIjoiQjYyODkyODgxOTgyOTM4ODkxMjMzMTEifSwiaXNzdWVyIjp7ImlkIjoiZGlkOmtleTpWMDAxOno2TWtnemF5aU5nMk5SQk5HQ0FEZlluYWhjVHViN0E5dW9rVUNqMWt2UWp5RkpXayIsIm5hbWUiOiJ6a3AtSUQifSwiaXNzdWFuY2VEYXRlIjoiMjAyMy0wOS0wNlQwNjo0MzoyMiswMDowMCIsImV4cGlyYXRpb25EYXRlIjoiMjAyNC0wOS0wNVQwNjo0MzoyMiswMDowMCIsInByb29mIjp7InR5cGUiOiJFZDI1NTE5U2lnbmF0dXJlMjAyMCIsImNyZWF0ZWQiOiIyMDIzLTA5LTA2VDA2OjQzOjIyLjg3N1oiLCJqd3MiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGWkVSVFFTSjkuLkh4amFxSWVHbjdpMkQ0eWxNTFNsa0VEZEg1NEFaSmZXWEZoY2NYSk1YNk9VbHpEc2R2ZlNQYkJaZXgteEM4ajN3eDR1ZHRvQWpkNjg1TXFoeXVKLUNnIiwicHJvb2ZQdXJwb3NlIjoiYXNzZXJ0aW9uTWV0aG9kIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiZGlkOmtleTpWMDAxOno2TWtnemF5aU5nMk5SQk5HQ0FEZlluYWhjVHViN0E5dW9rVUNqMWt2UWp5RkpXayJ9fQ.wZAFFqet604T-jCMPEi1nyaPE8x3uBPFJ_VqjsmqBvKx1VJB6GK26ogpD6m4PR2WuWjQIclJ57IFerT7yasHCg'

const Header = () => {
  const router = useRouter();
  const classes = useStyles();
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number>(0);

  const conn = useSelector((state: any) => state.auth.connected);

  const handleCloseNavMenu = () => {
    console.log("responsive feature");
  }

  const handleConnect =  () => {
    window && window.dispatchEvent(new CustomEvent("walletConnect", { detail: {name: 'DEMO DEX', message: "Demo DEX wants to connect."}} ))
    toast.success("Request connection sent!");
  }

  const handleDisconnect =  () => {
    store.dispatch(connected({ connection: '' }));
    localStorage.removeItem('address')
    router.push('/');
  }

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
  };

  function dexConnection(event: any) {
    console.log('Received dex', event)
    if (event.detail.connect) {
      localStorage.setItem('address', event.detail.address)
      store.dispatch(connected({ connection: event.detail.address }));
    }
  }

  useEffect(()=>{
    window.addEventListener("message", (event)=>{
      console.log('Here', event)
    }, true);
    window && window.addEventListener("dexConnect", dexConnection, true);
    const conn = localStorage.getItem('address')
    if (conn) {
      store.dispatch(connected({ connection: conn }));
    }
  },[])
  
  return (
    <div className={classes.header}>
      <Typography  variant="h5" noWrap component="a" href="/">
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
            >
              Address: {conn.substring(0,10) + '...'}
            </Typography>
            <Typography
              variant="button"
              className={classes.connectBtn}
              onClick={handleDisconnect}
            >
              Disconnect wallet
            </Typography>
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
        
      </div>
      {
      //   <div className={classes.testWrapper}>
      //   <div className={classes.test} onClick={() => {window && window.postMessage({type:'sendOffer', jwt:cred})}}>TEST</div>
      // </div>
  }
  <ToastContainer position="top-left" />
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
export default Header;
