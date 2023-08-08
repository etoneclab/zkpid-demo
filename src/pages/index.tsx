"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Trades = dynamic(() => import("./trade"), {
  ssr: false,
});
const Wallet = dynamic(() => import("./Wallet"), {
  ssr: false,
});

// do not delet this
export default function Index() {
  const [kycStarted, setKycStarted] = useState(false);
  return (
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "280px",
              marginLeft: "52px",
              marginRight: "49px",
            }}
          >
        <Trades kycStarted={false} />
        <Wallet kycStarted={kycStarted} />
        </div>
  );
}
