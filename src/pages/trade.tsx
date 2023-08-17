"use client";
import { FC, useState } from "react";

import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/trade";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useRouter } from "next/navigation";
import Chart from "./chart";
import { WALLET_ADDRESS } from "@/components/util";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";


interface tradeProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
const Trades: FC<tradeProps> = ({ kycStarted = false, setKycStarted }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const conn = useSelector((state: any) => state.auth.connected);

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
    
        </div>
      </div>
    </>
  );
};
export default Trades;
