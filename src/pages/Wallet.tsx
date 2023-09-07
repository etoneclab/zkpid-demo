"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import { Dialog, Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/Wallet";
import sendIcone from "../generalAssets/img/sendIcon.svg";
import swapIcone from "../generalAssets/img/swap.svg";
import downloadswapIcone from "../generalAssets/img/download.svg";
import menuIcone from "../generalAssets/img/menu.svg";
import credentialIcon from "../generalAssets/img/credentialicon.svg";
import circle from "../generalAssets/img/Ellipse.svg";
import purpleCircle from "../generalAssets/img/Ellipsepurple.svg";
import { WALLET_ADDRESS } from "@/components/util";


const Wallet = () => {
  const classes = useStyles();
  const [connect, setConnect] = useState<string>('')
  const [popup, setPopup] = useState(false)
  const [showCredential, setShowCredential] = useState(false)
  const [credential, setCredential] = useState('')

  useEffect(() => {
    window && window.addEventListener("credentialOffer", receiveCredential, true);
    window && window.addEventListener("credentialRequest", requestCredential, true);
    window && window.addEventListener("walletConnect", walletConnects, true);
    const cred = localStorage.getItem('credential')
    if (cred) {
      setPopup(true)
      setCredential(cred)
    }
    return () => {
      window && window.removeEventListener("credentialOffer", receiveCredential);
      window && window.removeEventListener("credentialRequest", requestCredential);
      window && window.removeEventListener("walletConnect", walletConnects);
    }
  }, [])

  const receiveCredential = (event: any) => {
    console.log("Event:", event.detail);
    const cred = JSON.stringify(event.detail)
    localStorage.setItem('credential', cred)
    setCredential(cred)
    setPopup(true)
  }
  
  const  requestCredential = (event: any) => {
    if (connect) {
      const item = localStorage.getItem('credential')
      if (item) {
        window && window.dispatchEvent(new CustomEvent("credentialProvided", { detail: item} ))
      } else {
        window && window.dispatchEvent(new CustomEvent("credentialNotProvided", { detail: {}} ))
      }
    }
  }

  const connectToDex = (accept:boolean) => {
    if (accept) {
      window && window.dispatchEvent(new CustomEvent("dexConnect", { detail: {connect: true, address: WALLET_ADDRESS}} ))
    } 
    setConnect('')
  }

  const walletConnects = (event: any) => {
    const name = event.detail
    setConnect(name.name)
  }

  return (
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
        { popup ? 
        <div className={classes.wraph}>
          <div className={classes.credIcone}>
            <Image src={credentialIcon} alt="swap" onClick={() => setShowCredential(true)}/>
          </div>
          <Typography variant="body1" className={classes.title}>
            You received a credential
          </Typography>
        </div>
        :
        null}
        <>
        {showCredential ?
         <Dialog
         open={true}
         onClose={() => setShowCredential(false)}
         classes={{ paper: classes.dialogContainer }}
         PaperProps={{ elevation: 0 }}
       >
         <Typography variant="h6" className={classes.title}>
          ZKP issued for KYC
         </Typography>
         <Typography variant="body1" className={classes.titlewrap}>
          {credential}
         </Typography>
         </Dialog>
        : null}
        { connect ? 
        <div >
          <Typography variant="body1" className={classes.title}>
            The {connect} wants to connect.
          </Typography>
          <div className={classes.justify}>
            <Typography
              variant="button"
              className={classes.btn}
              onClick={() => connectToDex(true)}
            >
              {"Connect!"}
            </Typography>
            <Typography
              variant="button"
              className={classes.btn}
              onClick={() => connectToDex(false)}
            >
              {"Ignore..."}
            </Typography>
          </div>
        </div>
        :
        null}
        </>
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
  );
};
export default Wallet;

