"use client";
import Image from "next/image";
import { FC, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/Wallet";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";
import sendIcone from "../generalAssets/img/sendIcon.svg";
import swapIcone from "../generalAssets/img/swap.svg";
import downloadswapIcone from "../generalAssets/img/download.svg";
import menuIcone from "../generalAssets/img/menu.svg";
import circle from "../generalAssets/img/Ellipse.svg";
import purpleCircle from "../generalAssets/img/Ellipsepurple.svg";
import WalletStarted from "./WalletStarted";
interface WalletProps {
  kycStarted: boolean;
}
const Wallet: FC<WalletProps> = ({ kycStarted }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {kycStarted ? (
          <div className={classes.wallet}>
            <div>
              <Image src={menuIcone} alt="menu" />
              <Typography variant="body1" className={classes.menu}>
                <Image src={purpleCircle} alt="circle" />
                Acount 1
              </Typography>
            </div>
            <Typography variant="h4" className={classes.title}>
              15 Mina <br />{" "}
              <Typography variant="h6" className={classes.title}>
                $ 0.00
              </Typography>
            </Typography>
            <div className={classes.section2}>
              <div className={classes.icones}>
                <div className={classes.wrape}>
                  <div className={classes.icone}>
                    <Image src={sendIcone} alt="send" />
                  </div>
                  <Typography variant="body1" className={classes.title}>
                    Send
                  </Typography>
                </div>

                <div className={classes.wrape}>
                  <div className={classes.icone}>
                    <Image src={downloadswapIcone} alt="receive" />
                  </div>
                  <Typography variant="body1" className={classes.title}>
                    Receive
                  </Typography>
                </div>

                <div className={classes.wrape}>
                  <div className={classes.icone}>
                    <Image src={swapIcone} alt="swap" />
                  </div>
                  <Typography variant="body1" className={classes.title}>
                    Swap
                  </Typography>
                </div>
              </div>
              <div className={classes.history}>
                <Typography variant="subtitle2" className={classes.elipsTitle}>
                  Transactions history
                </Typography>
                <div className={classes.elipsTitle}>
                  <Typography variant="body2" className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </Typography>
                  <Typography variant="body2">
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </Typography>
                </div>
                <div className={classes.elipsTitle}>
                  <Typography variant="body2" className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </Typography>
                  <Typography variant="body2">
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </Typography>
                </div>
                <div className={classes.elipsTitle}>
                  <Typography variant="body2" className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </Typography>
                  <Typography variant="body2">
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </Typography>
                </div>
                <div className={classes.elipsTitle}>
                  <Typography variant="body2" className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </Typography>
                  <Typography variant="body2">
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <WalletStarted kycStarted={false} />
        )}
      </ThemeProvider>
    </>
  );
};
export default Wallet;
//
