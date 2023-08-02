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

interface ConnectionModalProps {
  open: boolean;
  onCancel?: () => void;
}

export const ConnectionModal: FC<ConnectionModalProps> = ({
  open = false,

  onCancel,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [conn, setConn] = useState(false);

  store.subscribe(() => {
    const state = store.getState();
    setConn(state.auth.request);
  });
  const conecting = () => {
    store.dispatch(connected({ connection: true }));
    handleCancel();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Dialog
        open={open}
        classes={{ paper: classes.dialogContainer }}
        PaperProps={{ elevation: 0 }}
      >
        <Typography variant="h6" className={classes.text}>
          {t("modalConnection.title")}
        </Typography>

        <Typography
          variant={isSmallScreen ? "subtitle2" : "subtitle1"}
          className={classes.text}
        >
          {t("modalConnection.content")}
        </Typography>

        <div className={classes.btnRow}>
          <div className={clsx(classes.btnMargin, classes.btn)}>
            <Typography
              variant="button"
              className={classes.rejectBtn}
              onClick={handleCancel}
            >
              {t("modalConnection.cancel")}
            </Typography>
          </div>
          <div className={clsx(classes.btnMargin, classes.btn)}>
            <Typography
              variant="button"
              className={classes.resetBtn}
              onClick={conecting}
            >
              {t("modalConnection.countinue")}
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  );
};
