"use client";

import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../../generalAssets/styles/Header";

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
