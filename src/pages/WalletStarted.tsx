"use client";
import Image from "next/image";
import { FC, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/startedWallet";
import { theme } from "../generalAssets/Themes/Theme";
import trashIcone from "../generalAssets/img/trash.svg";
import swapIcone from "../generalAssets/img/swap.svg";
import downloadswapIcone from "../generalAssets/img/download.svg";
import menuIcone from "../generalAssets/img/menu.svg";
import circle from "../generalAssets/img/Ellipse.svg";
import purpleCircle from "../generalAssets/img/Ellipsepurple.svg";
interface WalletProps {
  kycStarted: boolean;
}
const WalletStarted: FC<WalletProps> = ({ kycStarted }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className={classes.wallet}>
          <div className={classes.menu}>
            <Image src={menuIcone} alt="menu" />
            <Typography variant="body1" className={classes.subMenu}>
              <Image src={purpleCircle} alt="circle" />
              Acount 1
            </Typography>
          </div>
          <Typography variant="h6" className={classes.elipsTitle}>
            Transactions history
          </Typography>
          <div className={classes.tabMenu}>
            <div className={classes.titles}>
              <div className={classes.active}>Valid</div>
              <div>Expierd</div>
            </div>
          </div>
          <div className={classes.title}>
            <div className={classes.history}>
              <Typography variant="h6">ZKP KYC credential</Typography>
              <Image src={trashIcone} alt="trash" />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default WalletStarted;
//
