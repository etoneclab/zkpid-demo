"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/pools";
import { StartingKYC } from "./KYC";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
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
const Pools: FC<PoolProps> = ({ kycStarted = false, setKycStarted }) => {
  const classes = useStyles();
  const [openKYC, setOpenKYC] = useState(false);
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);

  async function getData() {
    setOpenKYC(true);
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: "unique session",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setToken(data.authToken);
      console.log("Res:", data);
    });
  }
  const onCancelKYC = () => {
    setOpenKYC(false);
    console.log("hey", openKYC);
  };
  {
    console.log("openKYC", openKYC);
  }
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
            <StartingKYC
              setKycStarted={setKycStarted}
              openKYC={openKYC}
              title={"Welcome to KYC check connection"}
              subTitle={"Thank you for choosing DEMO DEX!"}
              description={"What is it?"}
              onCancel={onCancelKYC}
            />
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

                <Btn text={"Permissioned"} onClick={getData} />
                <Typography className={classes.title}>
                  Access more liquidity pools by doing KYC check
                </Typography>
                {token ? (
                  <iframe src={"https://ui.idenfy.com/?authToken=" + token} />
                ) : null}
              </div>
            </div>
          )}
        <Wallet kycStarted={kycStarted} />
        </div>
    </>
  );
};
export default Pools;
