"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/pools";
import { StartingKYC } from "./KYC";
import Btn from "../components/common/Button";
import unlock from "../generalAssets/img/unlockIcon.svg";
import lock from "../generalAssets/img/lockedIcon.svg";
import dynamic from "next/dynamic";

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
  const [conn, setConn] = useState(false);

  async function getData() {
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: "unique session",
        test: "APPROVED"
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setToken(data.url)
    });
  }
  const onCancelKYC = () => {
    setOpenKYC(false);
  };
  
  const text = conn
    ? "Address connected ah35fnle0n2-xiw-2hd9endj4"
    : "Connect wallet";

  return (
    <>
      <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "280px",
              marginLeft: "52px",
              marginRight: "49px",
            }}
          >
        
          {openKYC ? (
            <>
            <StartingKYC
              setKycStarted={() => {}}
              openKYC={openKYC}
              title={"Welcome to KYC check connection"}
              subTitle={"Thank you for choosing DEMO DEX!"}
              description={"What is it?"}
              onCancel={onCancelKYC}
            />
            {token ? (
                  <iframe src={token} />
                ) : null}
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
                  Join pool but with access limit
                </Typography>
              </div>
              <div className={classes.section2}>
                <Image src={lock} alt="unlock" />

                <Btn text={"Permissioned"} onClick={() => setOpenKYC(true)} />
                <Typography className={classes.title}>
                  Access more liquidity pools by doing KYC check
                </Typography>
                
              </div>
            </div>
          )}
        <Wallet kycStarted={false} />
        </div>
    </>
  );
};
