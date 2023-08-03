"use client";
import { Dialog, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { store } from "@/store/store";
import clsx from "clsx";
import { connected } from "@/store/reducers/root";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import useStyles from "../../generalAssets/styles/ConnectionModal";
import { theme } from "../../generalAssets/Themes/Theme";
interface ConnectionModalProps {
  open: boolean;
  onCancel?: () => void;
}

export const ConnectionModal: FC<ConnectionModalProps> = ({
  open = false,

  onCancel,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  // store.subscribe(() => {
  //   const state = store.getState();
  //   setConn(state.auth.request);
  // });
  const conecting = () => {
    store.dispatch(connected({ connection: true }));
    handleCancel();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const isSmallScreen = false; // useMediaQuery(() => useTheme().breakpoints.down("sm"));
  return (
    <>
      <Dialog
        open={open}
        classes={{ paper: classes.dialogContainer }}
        PaperProps={{ elevation: 0 }}
      >
        <Typography variant="h6" className={classes.text}>
          {"Wallet connection"}
        </Typography>

        <Typography
          variant={isSmallScreen ? "subtitle2" : "subtitle1"}
          className={classes.text}
        >
          {
            "The DEX wants to connect with your wallet. Do you want to continue?"
          }
        </Typography>

        <div className={classes.btnRow}>
          <div className={clsx(classes.btnMargin, classes.btn)}>
            <Typography
              variant="button"
              className={classes.rejectBtn}
              onClick={handleCancel}
            >
              {"Cancel"}
            </Typography>
          </div>
          <div className={clsx(classes.btnMargin, classes.btn)}>
            <Typography
              variant="button"
              className={classes.resetBtn}
              onClick={conecting}
            >
              {"Continue"}
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  );
};
