"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { MenuItem, Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/Wallet";
import { theme } from "../generalAssets/Themes/Theme";
import sendIcone from "../generalAssets/img/sendIcon.svg";
import swapIcone from "../generalAssets/img/swap.svg";
import downloadswapIcone from "../generalAssets/img/download.svg";
import menuIcone from "../generalAssets/img/menu.svg";
import circle from "../generalAssets/img/Ellipse.svg";
import purpleCircle from "../generalAssets/img/Ellipsepurple.svg";
import WalletStarted from "./WalletStarted";
import { store } from "@/store/store";
import { useSelector } from "react-redux";
interface WalletProps {
  kycStarted: boolean;
}
const Wallet: FC<WalletProps> = ({}) => {
  const classes = useStyles(theme);
  const toggleKYC = useSelector((state: any) => state.auth.toggleKYC);

  useEffect(() => {
    setUpCallback()
  }, [])


  const setUpCallback = () => {
    console.log('Setup collegato')
    window && window.addEventListener("credentialOffer", receiveMessage, false);
    function receiveMessage(event: any) {
      console.log("Event:", event.detail);
    }
  };

  return (
    <>
      
        {!toggleKYC ? (
          <div className={classes.wallet}>
            <div>
              <Image src={menuIcone} alt="menu" />
              <Typography variant="body1" className={classes.menu}>
                <Image src={purpleCircle} alt="circle" />
                Acount 1
              </Typography>
            </div>
            <div className={classes.title}>
              15 Mina <br />{" "}
              <div className={classes.title}>
                $ 0.00
              </div>
            </div>
            <div className={classes.section2}>
              <div className={classes.icones}>
                <div className={classes.wrape}>
                  <Typography variant="body1"className={classes.icone}>
                    <Image src={sendIcone} alt="send" />
                  </Typography>
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
                  <div  className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </div>
                  <div >
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </div>
                </div>
                <div className={classes.elipsTitle}>
                  <div  className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </div>
                  <div >
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </div>
                </div>
                <div className={classes.elipsTitle}>
                  <div  className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </div>
                  <div >
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </div>
                </div>
                <div className={classes.elipsTitle}>
                  <div className={classes.justify}>
                    <Image src={circle} alt="" /> Lumina <br />
                    0.267 - $27,698.52
                  </div>
                  <div >
                    10.98%<Typography variant="body1"> $7,395,90</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <WalletStarted kycStarted={false} />
        )}
     
    </>
  );
};
export default Wallet;
//
