'use client'

import Script from "next/script";
import { useState } from "react";



export const DEX = () => {
    const [token, setToken] = useState('')
     async function getData() {
        fetch('/api/startkyc', {
            body:JSON.stringify({
            address: 'B6289288198293889123311',
            uid: 'unique session'
        }),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
    }).then(async(response) => {
        const data = await response.json();
        setToken(data.authToken)    
        console.log('Res:', data)
        })
      }

    return (
        <section>
       ` <h1>DEX AREA</h1>
            <section>
                <div onClick={getData}>Start KYC</div>
            </section>`
            {
                token ?
                <iframe src={"https://ui.idenfy.com/?authToken=" + token} />
                : null
            }
            <Script
            src="/js/script.js"
            onLoad={() => {
                console.log('Script has loaded')
            }}
        />
        </section>
       
    )
}