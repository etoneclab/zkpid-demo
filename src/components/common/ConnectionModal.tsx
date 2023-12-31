"use client";

import Image from "next/image";
import { Dialog, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { store } from "@/store/store";
import clsx from "clsx";
import { connected } from "@/store/reducers/root";
import smile from "../../generalAssets/img/smile.svg";

import useStyles from "../../generalAssets/styles/ConnectionModal";
import { WALLET_ADDRESS } from "../util";

interface ConnectionModalProps {
  imgSrc: object | null;
  onCancel?: () => void;
  description: string;
  title: string;
  setKycStarted?: () => void;
}

const ConnectionModal: FC<ConnectionModalProps> = ({
  imgSrc,
  title,
  description,
  onCancel,
  setKycStarted,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  // store.subscribe(() => {
  //   const state = store.getState();
  //   setConn(state.auth.request);
  // });
  const conecting = () => {
    store.dispatch(connected({ connection: WALLET_ADDRESS }));
    handleCancel()
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogContainer }}
        PaperProps={{ elevation: 0 }}
      >
        <Typography variant="h6" className={classes.text}>
          {title.length === 0 ? <Image src={smile} alt={"smile"} /> : title}
        </Typography>

        <Typography variant={"subtitle2"} className={classes.text}>
          {description}
        </Typography>

        <div className={classes.btnRow}>
          {title.length === 0 ? (
            <div className={clsx(classes.btnMargin, classes.btn)}>
              <Typography
                variant="button"
                className={classes.rejectBtn}
                onClick={handleCancel}
              >
                {"Close"}
              </Typography>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default ConnectionModal