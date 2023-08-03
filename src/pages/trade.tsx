"use client";

import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/trade";

import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useRouter } from "next/navigation";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";

const Trades = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);
  const handleConnect = async () => {
    setOpen(true);
    store.dispatch(request({ connection: true }));
  };
  const onCancel = () => {
    setOpen(false);
  };
  const text = conn
    ? "Address connected ah35fnle0n2-xiw-2hd9endj4"
    : "Connect wallet";
  console.log(conn);
  return (
    <>
      <div className={classes.trade}>
        <Typography variant="h5" noWrap component="a" href="">
          Trade
        </Typography>

        <div className={classes.border1}>bitCoin</div>
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
            <ConnectionModal open={open} onCancel={onCancel} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Trades;
