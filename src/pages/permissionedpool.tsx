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
interface tradeProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
const PermissionnedPools: FC<tradeProps> = ({
  kycStarted = false,
  setKycStarted,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const hasCredential = localStorage.getItem('credential')
    if (!hasCredential) {
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
          Permissioned Pool
        </Typography>

        <div className={classes.border1}>
          <Chart />
        </div>
        <div className={classes.border2}>
          <SmallTable />
        </div>
      </div>
      <Wallet kycStarted={false} />
      </div>
    </>
  );
};
export default PermissionnedPools;
