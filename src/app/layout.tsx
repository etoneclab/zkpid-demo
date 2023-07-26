'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { store } from '../store/store'
import { request } from '@/store/reducers/root'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // This is the event from the KYC process
  // Parse and send the message in the store...
  function receiveMessage(event:any) {
    console.log('Event:', event);
    store.dispatch(request({connection: true}))
  }

  if (typeof window !== "undefined") {
    window.addEventListener("message", receiveMessage, false);
  }

  return (
   <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
