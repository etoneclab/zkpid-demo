"use client";
import { Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import ConnectionModal from "../components/common/ConnectionModal";
import PermissionnedPools from "./permissionnedPools";
import useStyles from "../generalAssets/styles/StartingKYC";
import smile from "../generalAssets/img/smile.svg";
import { connected, toggleKYC } from "@/store/reducers/root";
import { store } from "@/store/store";
import { connect, useSelector } from "react-redux";
import { theme } from "@/generalAssets/Themes/Theme";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import sampleJson from "./sample.json";
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
  const uid = uuidv4();
  const { t } = useTranslation();
  const classes = useStyles(theme);
  const [token, setToken] = useState("");

  const [open, setOpen] = useState(false);
  const [permissionnedPools, setPermissionnedPools] = useState(false);
  let pollingTimeout: ReturnType<typeof setTimeout> = setTimeout(
    () => "",
    1000
  );
  let alreadyRegistered = useRef(false);
  const connecting = () => {
    setUpCallback();
    getData();
    //store.dispatch(toggleKYC());
  };

  async function getData() {
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid,
        test: "APPROVED",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      console.log("<<!>>", data);
      setToken(data.url);
    });
  }
  const handleCancel = () => {
    setOpen(false);
    setPermissionnedPools(true);
  };
  useEffect(() => {
    return function cleanup() {
      clearTimeout(pollingTimeout);
    };
  }, []);
  const retryPolling = () => {
    console.log("retring...");
    clearTimeout(pollingTimeout);
    pollingTimeout = setInterval(() => {
      fetch("/api/polling", {
        body: JSON.stringify({
          address: "B6289288198293889123311",
          uid,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        const data = await response.json();
        console.log("polling res:", data);
      });
    }, 3000);
  };
  const setUpCallback = async () => {
    console.log(".......", alreadyRegistered.current);
    if (alreadyRegistered.current) {
      return;
    }
    alreadyRegistered.current = true;
    window && window.addEventListener("message", receiveMessage);
    function receiveMessage(event: any) {
      clearTimeout(pollingTimeout);
      console.log("Event:", event.data.status);
      if (event.data.status === "approved") {
        store.dispatch(connected({ connection: "" }));
        setToken("");
        retryPolling();
      }
    }
  };

  return (
    <>
      {token ? (
        <div className={classes.kyc}>
          <iframe className={classes.iframe} src={token} />
        </div>
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
                  Customer), is performed by iDenfy. The final credential will
                  be stored in this app and may be re-used with complying
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
                  Get your ID, passport or driver&apos;s license, you will need
                  to scan them front and back. You will also be required to take
                  a photo of your face.
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
