"use client";

import { useState } from "react";
import { store } from "../store/store";
import { connected, request } from "@/store/reducers/root";
import { v4 as uuidv4 } from "uuid";

export const DEX = () => {
  const [token, setToken] = useState("");
  const [conn, setConn] = useState(false);

  const connectWallet = () => {
    store.dispatch(request({ connection: true }));
  };

  async function getData() {
    fetch("/api/startkyc", {
      body: JSON.stringify({
        address: "B6289288198293889123311",
        uid: uuidv4(),
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

  return (
    <section>
      ` <h1>DEX AREA</h1>
      <section>
        <div onClick={connectWallet}>Connect Wallet</div>
        {conn ? <span>Connected</span> : null}
      </section>
      `
      <section>
        <div onClick={getData}>Start KYC</div>
      </section>
      {token ? (
        <iframe src={"https://ui.idenfy.com/?authToken=" + token} />
      ) : null}
    </section>
  );
};
