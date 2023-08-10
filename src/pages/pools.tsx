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
import { useSelector } from "react-redux";

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

  const onCancelKYC = () => {
    setOpenKYC(false);
  };
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
              setKycStarted={() => {}}
              openKYC={openKYC}
              title={"Welcome to KYC check connection"}
              subTitle={"Thank you for choosing DEMO DEX!"}
              description={"What is it?"}
              onCancel={onCancelKYC}
            />
            {token ? <iframe src={token} /> : null}
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
                <Btn text={"Permissioned"} onClick={() => setOpenKYC(true)} />
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
