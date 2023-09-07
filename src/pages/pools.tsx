"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/pools";
import { StartingKYC } from "./KYC";
import Btn from "../components/common/Button";
import unlock from "../generalAssets/img/unlockIcon.svg";
import lock from "../generalAssets/img/lockedIcon.svg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Wallet from "./Wallet";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PoolProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
export default function Pools() {
  const classes = useStyles();
  const [openKYC, setOpenKYC] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();
  
  const conn = useSelector((state: any) => state.auth.connected);


  let pollingTimeout: ReturnType<typeof setTimeout> = setTimeout(
    () => "",
    1000
  );

  const onCancelKYC = () => {
    setOpenKYC(false);
  };

  function providedMessage(event:any) {
    console.log('Received...', event)
    localStorage.setItem('credential', JSON.stringify(event.detail))
    if (event.detail.zkp) {
      router.push('/permissionedpool');
    } else {
      setOpenKYC(true)
    }
  }

  function notProvidedMessage(event:any) {
    setOpenKYC(true)
  }

  const checkCredential = () => {
    const hasCredential = localStorage.getItem('credential')
    const address = localStorage.getItem('address')
    if (hasCredential && address) {
      const cred = JSON.parse(hasCredential)
      if (address !== cred?.address || !cred?.zkp) {
        setOpenKYC(true)
        return
      } else {
        router.push('/permissionedpool');
        return 
      }
    } 
    window && window.dispatchEvent(new CustomEvent("credentialRequest", { detail: {type: 'Kyc Attestation'}} ))
    toast.success("Request credential sent!");
  }

  useEffect(() => {
    window && window.addEventListener("message", receiveMessage, true);
    window && window.addEventListener("credentialProvided", providedMessage, true);
    window && window.addEventListener("credentialNotProvided", notProvidedMessage, true);

    return function cleanup() {
      clearTimeout(pollingTimeout);
      window && window.removeEventListener("message", receiveMessage);
      window && window.removeEventListener("credentialProvided", providedMessage);
      window && window.removeEventListener("credentialNotProvided", notProvidedMessage);
    
    };
  }, []);


  const retryPolling = () => {
    console.log("retring...");
    clearTimeout(pollingTimeout);
    const savedUid = localStorage.getItem('uid')
    pollingTimeout = setInterval(() => {
      try {
      fetch("/api/polling", {
        body: JSON.stringify({
          address: "B6289288198293889123311",
          uid: savedUid,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        if (response.status === 200) {
          clearTimeout(pollingTimeout);
          const data = await response.json();
          window && window.dispatchEvent(new CustomEvent("credentialOffer", { detail: data} ))
          console.log("polling res:", data);
        } else {
          console.log('polling...')
        }
      })
    } catch(e) {
      console.log('Error fetching...')
    }
    }, 3000);
  };

  function receiveMessage(event: any) {
    clearTimeout(pollingTimeout);
    console.log("Event:", event.data);
    if (event.data.status === "approved") {
      setTimeout(() => {
        setToken("");
        setOpenKYC(false)
        retryPolling();
      },5000)
    }
    if (event.data.status === "unverified") {
      setToken("");
      setOpenKYC(false)
    }
  }


  const uid=uuidv4()


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "280px",
          marginLeft: "52px",
          marginRight: "49px",
          marginBottom: "120px"
        }}
      >
        {openKYC ? (
          <>
            <StartingKYC
              uid={uid}
              setKycStarted={() => {}}
              openKYC={openKYC}
              title={"Welcome to ZKP-ID check connection"}
              subTitle={"Thank you for choosing DEMO DEX!"}
              description={"What is it?"}
              onCancel={onCancelKYC}
            />
          </>
        ) : (
          <div className={classes.pools}>
            <Typography className={classes.title}>
              Access liquidity pools
            </Typography>

            <div className={classes.section1}>
              <Image src={unlock} alt="unlock" />
              
              <Typography className={classes.title}>
                Permissionless pool
              </Typography>
              <div>- Access without KYC check -</div>
              {conn ?
                <Btn text={"Join"} onClick={() => router.push('/permissionless')} />
                :
                <Btn disabled={true} textStyle={{color:"#555555"}} text="Connect a Wallet" />
              }
            </div>
            
            <div className={classes.section2}>
              <Image src={lock} alt="unlock" />
              <Typography className={classes.title}>
                Permissioned pool              
              </Typography>
              <div>- KYC check required -</div>
              {conn ?
                <Btn text={"Join"} onClick={() => checkCredential()} />
              :  
                <Btn disabled={true} textStyle={{color:"#555555"}} text="Connect a Wallet" />
              }

              
            </div>
          </div>
        )}
      </div>
    </>
  );
}
