"use client";
import { FC, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/permissionedPool";
import dynamic from "next/dynamic";
import { store } from "../store/store.js";
import { connected, request } from "@/store/reducers/root";
import SmallTable from "../components/common/simpleTable";
import Chart from "./chart";
import { useRouter } from "next/router.js";
import Wallet from "./Wallet";
import { useSelector } from "react-redux";
interface tradeProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}

const PermissionlessPools: FC<tradeProps> = ({
  kycStarted = false,
  setKycStarted,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();
  const conn = useSelector((state: any) => state.auth.connected);

  useEffect(() => {
    const address = localStorage.getItem('address')
    if (!address) {
      
        router.push('/');
      }
    
  }, [])
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
      <div className={classes.trade}>
        <Typography variant="h5" className={classes.title}>
          Permissionless Pool
        </Typography>

        <div className={classes.border1}>
          <Chart />
        </div>
        <div className={classes.border2}>
          <SmallTable />
        </div>
      </div>
      </div>
    </>
  );
};
export default PermissionlessPools;
