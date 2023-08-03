"use client";

import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/pools";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";
const Header = dynamic(() => import("../components/Header"), {
  ssr: false, // This tells Next.js to skip server-side rendering for this component
});
import dynamic from "next/dynamic";
const Pools = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className={classes.pools}>
        <Typography variant="h5" noWrap component="a" href="">
          Pools
        </Typography>
      </div>
    </>
  );
};
export default Pools;
