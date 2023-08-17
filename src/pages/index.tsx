"use client";
import { useState } from "react";
import Wallet from "./Wallet";
import Trades from "./trade";


export default function Index() {
  const [kycStarted, _] = useState(false);
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "280px",
        marginLeft: "52px",
        marginRight: "49px",
        marginBottom: "120px",
      }}
    >
      <Trades kycStarted={false} />
      <Wallet kycStarted={kycStarted} />
    </div>
    </>
  );
}
