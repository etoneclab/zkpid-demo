"use client";
import { FC, useState } from "react";

import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/trade";
import dynamic from "next/dynamic";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useRouter } from "next/navigation";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";
import Chart from "./chart";

interface tradeProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
const Trades: FC<tradeProps> = ({ kycStarted = false, setKycStarted }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);
  const handleConnect = async () => {
    setOpen(true);
    store.dispatch(request({ connection: true }));
    console.log(conn);
  };
  const onCancel = () => {
    setOpen(false);
  };
  const text = conn
    ? "Address connected ah35fnle0n2-xiw-2hd9endj4"
    : "Connect wallet";
  console.log("props", kycStarted);
  return (
    <>
      <div className={classes.trade}>
        <Typography variant="h5" noWrap component="a" href="">
          Trade
        </Typography>

        <div className={classes.border1}>
          <Chart />
        </div>
        <div className={classes.border2}>
          <Typography variant="h4" className={classes.title}>
            swap
          </Typography>
          <Typography variant="h6" className={classes.subTitle}>
            Easy way to trade your tokens
          </Typography>
          <div className={classes.convertSection}>
            <div className={classes.fromSection}>from</div>
            <div className={classes.toSection}>to</div>
          </div>
          <div>
            <Typography
              variant="button"
              className={classes.connectBtn}
              onClick={handleConnect}
            >
              {text}
            </Typography>
            <ConnectionModal
              imgSrc={[]}
              open={open}
              onCancel={onCancel}
              title={"Wallet connection"}
              description={
                "The DEX wants to connect with your wallet. Do you want to continue?"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Trades;
