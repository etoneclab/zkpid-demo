"use client";

import { useState } from "react";
import { store } from "../../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../../generalAssets/styles/header";
import { ConnectionModal } from "../../components/common/ConnectionModal";
import { theme } from "../../generalAssets/Themes/Theme";

export const MENU = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.header}>
        <Typography variant="h5" noWrap component="a" href="">
          Pools
        </Typography>
      </div>
    </>
  );
};
