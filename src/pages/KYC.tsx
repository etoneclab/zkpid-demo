"use client";
import { Typography } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ConnectionModal } from "../components/common/ConnectionModal";
import PermissionnedPools from "./permissionnedPools";
import useStyles from "../generalAssets/styles/StartingKYC";
import smile from "../generalAssets/img/smile.svg";
import { toggleKYC } from "@/store/reducers/root";
import { store } from "@/store/store";
import { useSelector } from "react-redux";

interface StartingKYCProps {
  openKYC: boolean;
  onCancel?: () => void;
  description: string;
  title: string;
  subTitle: string;
  setKycStarted?: () => void;
}

export const StartingKYC: FC<StartingKYCProps> = ({
  openKYC = false,
  title,
  subTitle,
  description,
  onCancel,
  setKycStarted,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [permissionnedPools, setPermissionnedPools] = useState(false);
  const conecting = () => {
    setOpen(true);
    store.dispatch(toggleKYC());
  };
  const handleCancel = () => {
    setOpen(false);
    setPermissionnedPools(true);
  };
  const toggledKYC = useSelector((state: any) => state.auth.toggleKYC);
  return (
    <>
      {toggledKYC ? (
        <PermissionnedPools kycStarted={false} />
      ) : (
        <div className={classes.kyc}>
          <div className={classes.title}>
            <Typography variant="h5" className={classes.text}>
              {title}
            </Typography>
            <Typography variant="h6" className={classes.text}>
              {subTitle}
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle2"} className={classes.subTitles}>
              {description}
            </Typography>

            <ul className={classes.list}>
              <li>
                <Typography variant={"subtitle1"} className={classes.text}>
                  The ID verification, commonly called KYC (i.e. Know Your
                  Customer), is performed by iDenfy. The reslistting credential
                  will be stored in this app and may be re-used with complying
                  businesses.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <Typography variant={"subtitle2"} className={classes.subTitles}>
              Get ready
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography variant={"subtitle1"} className={classes.text}>
                  Get your ID, passport or driver’s license, you will need to
                  scan them front and back. You will also be required to take a
                  photo of your face.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={"subtitle2"} className={classes.subTitles}>
              Next steps
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography variant={"subtitle1"} className={classes.text}>
                  You will be notified once the verification has been completed.
                </Typography>
              </li>
            </ul>
          </div>

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
                {"Start Verification"}
              </Typography>
              <ConnectionModal
                imgSrc={smile}
                open={open}
                onCancel={handleCancel}
                title={""}
                description={"KYC check completed!"}
                setKycStarted={setKycStarted}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
