"use client";

import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/Header";
import { ConnectionModal } from "../components/common/ConnectionModal";

export const MENU = () => {
  const [selected, setSelected] = useState<number>();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();
  store.subscribe(() => {
    const state = store.getState();
    setConn(state.auth.connected);
    if (state.auth.request && state.auth.connected) {
      store.dispatch(request({ connection: false }));
    }
  });

  async function getData() {
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: "unique session",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setToken(data.authToken);
      console.log("Res:", data);
    });
  }
  const handleCloseNavMenu = () => {
    console.log("responsive feature");
  };
  const handleConnect = async () => {
    setOpen(true);
    store.dispatch(request({ connection: true }));
  };
  const onCancel = () => {
    setOpen(false);
  };
  const pages = [
    {
      text: t("menu.trade"),
      link: "/about",
    },
    {
      text: t("menu.Earns"),
      link: "/earns",
    },
    {
      text: t("menu.Pools"),
      link: "/pools",
    },
  ];
  const handleSelect = (item: any) => {
    setSelected(pages?.indexOf(item));
    router.push(item?.link[0]);
    console.log(pages?.indexOf(item));
  };
  const text = conn ? t("menu.connectTrue") : t("menu.connectionButton");
  return (
    <div className={classes.header}>
      <Typography variant="h5" noWrap component="a" href="">
        DEMO DEX
      </Typography>
      {pages.map((page, index) => (
        <MenuItem key={index} onClick={handleCloseNavMenu}>
          <Typography
            align="center"
            onClick={() => {
              handleSelect(page);
            }}
          >
            {page.text}
          </Typography>
        </MenuItem>
      ))}

      <div className={classes.column}>
        <Typography
          variant="button"
          className={classes.connectBtn}
          onClick={handleConnect}
        >
          {text}
        </Typography>
        <ConnectionModal open={open} onCancel={onCancel} />
      </div>
    </div>
  );
};
