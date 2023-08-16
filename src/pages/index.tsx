"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Trades = dynamic(() => import("./trade"), {
  ssr: false,
});
const Wallet = dynamic(() => import("./Wallet"), {
  ssr: false,
});

export default function Index() {
  const [kycStarted, _] = useState(false);
  return (
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
  );
}
