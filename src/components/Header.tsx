"use client";

import { useState } from "react";
import Btn from "./common/Button";
import { useTranslation } from "next-i18next";
import useStyles from "../generalAssets/styles/Header";
import { MenuItem, Typography } from "@mui/material";

export const MENU = () => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleCloseNavMenu = () => {};
  const pages = [
    {
      text: t("menu.trade"),
      link: ["/dashboard"],
    },
    {
      text: t("menu.Earns"),
      link: ["/dashboard"],
    },
    {
      text: t("menu.Pools"),
      link: ["/dashboard"],
    },
  ];
  return (
    <>
      <div className={classes.header}>
        <Typography variant="h5" noWrap component="a" href="">
          DEMO DEX
        </Typography>
        {pages.map((page, index) => (
          <MenuItem key={index} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.text}</Typography>
          </MenuItem>
        ))}
        <Btn text={"Connect to Wallet"} onClick={handleButtonClick} />
      </div>
    </>
  );
};
