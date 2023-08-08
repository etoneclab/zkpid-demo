"use client";
import { FC, useState } from "react";

import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import useStyles from "../generalAssets/styles/permissionedPool.tsx";
import dynamic from "next/dynamic";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import SmallTable from "../components/common/simpleTable";
import Chart from "./chart";
interface tradeProps {
  setKycStarted?: () => void;
  kycStarted: boolean;
}
const PermissionnedPools: FC<tradeProps> = ({
  kycStarted = false,
  setKycStarted,
}) => {
  const classes = useStyles(theme);
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
  return (
    <>
      <div className={classes.trade}>
        <Typography variant="h5" className={classes.title}>
          PermissionnedPools
        </Typography>

        <div className={classes.border1}>
          <Chart />
        </div>
        <div className={classes.border2}>
          <SmallTable />
        </div>
      </div>
    </>
  );
};
export default PermissionnedPools;
