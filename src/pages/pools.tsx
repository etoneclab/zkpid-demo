"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/pools";
import { StartingKYC } from "./KYC";
import Btn from "../components/common/Button";
import unlock from "../generalAssets/img/unlockIcon.svg";
import lock from "../generalAssets/img/lockedIcon.svg";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { store } from "@/store/store";
import { connected } from "@/store/reducers/root";
import { v4 as uuidv4 } from "uuid";

const Wallet = dynamic(() => import("./Wallet"), {
  ssr: false,
});

interface PoolProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
export default function Pools() {
  const classes = useStyles();
  const [openKYC, setOpenKYC] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();
  
  let pollingTimeout: ReturnType<typeof setTimeout> = setTimeout(
    () => "",
    1000
  );

  const onCancelKYC = () => {
    setOpenKYC(false);
  };

  function providedMessage(event:any) {
    router.push('/permissionedpool');
  }

  function notProvidedMessage(event:any) {
    setOpenKYC(true)
  }

  window && window.addEventListener("credentialProvided", providedMessage);
  window && window.addEventListener("credentialNotProvided", notProvidedMessage);

  const checkCredential = () => {
    window && window.dispatchEvent(new CustomEvent("credentialRequest", { detail: {type: 'kyc'}} ))
  }

  useEffect(() => {
    window && window.addEventListener("message", receiveMessage);

    return function cleanup() {
      clearTimeout(pollingTimeout);
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
      setToken("");
      setOpenKYC(false)
      retryPolling();
    }
    if (event.data.status === "unverified") {
      setToken("");
      setOpenKYC(false)
    }
  }


  const uid=uuidv4()

  const conn = useSelector((state: any) => state.auth.connected);

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
              <Btn text={"Permissionless"} />
              <Typography className={classes.title}>
                Join pool no permissions needed
              </Typography>
            </div>
            <div className={classes.section2}>
              <Image src={lock} alt="unlock" />
              <Typography className={classes.title}>
                Access more liquidity pools by doing KYC check
              </Typography>
              {conn ?
                <Btn text={"Permissioned"} onClick={() => checkCredential()} />
              :  <Typography >
                  Connect a wallet first...
                </Typography>
              }

              
            </div>
          </div>
        )}
        <Wallet kycStarted={false} />
      </div>
    </>
  );
}
