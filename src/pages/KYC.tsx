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
import { theme } from "@/generalAssets/Themes/Theme";
import axios from "axios";

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
  const classes = useStyles(theme);
  const [token, setToken] = useState("");

  const [open, setOpen] = useState(false);
  const [permissionnedPools, setPermissionnedPools] = useState(false);

  const connecting = () => {
    setOpen(true);
    getData();
    store.dispatch(toggleKYC());
  };

  async function getData() {
    // console.log("<<<<", process.env);
    // let url = process.env.NEXT_PUBLIC_ZKPID_AUTH_URL + "/papi/auth";
    // let token = "";
    // try {
    //   const response = await axios.post(
    //     url,
    //     {
    //       customer_id: process.env.NEXT_PUBLIC_ZKPID_CUSTOMER_ID,
    //       secret_key: process.env.NEXT_PUBLIC_ZKPID_SECRET_KEY,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   token = response.data.token;
    // } catch (error) {
    //   console.log(">>>>>", token, error);
    // }
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: "unique session",
        test: "APPROVED",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setToken(data.url);
    });
    console.log(token, "token");
  }
  const handleCancel = () => {
    setOpen(false);
    setPermissionnedPools(true);
  };
  const toggledKYC = useSelector((state: any) => state.auth.toggleKYC);
  return (
    <>
      {token ? (
        // toggledKYC ? (
        //   <PermissionnedPools kycStarted={false} />
        // ) : (
        <iframe src={token} />
      ) : (
        // )
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
                  Get your ID, passport or driver's license, you will need to
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
                onClick={connecting}
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
