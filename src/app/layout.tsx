"use client";

import "./globals.css";
import { store } from "../store/store";
import { request } from "@/store/reducers/root";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
