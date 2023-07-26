'use client'

import { connected } from '@/store/reducers/root'
import { store } from '@/store/store'
import { useState } from 'react'

export const WALLET = () => {
    const [conn, setConn] = useState(false)

    store.subscribe(() => {
        const state = store.getState()
        setConn(state.auth.request)
    })
    
    return (
        <>
        <h1>WALLET AREA</h1>
        { conn ?
            <div onClick={() => store.dispatch(connected({connection: true}))}>Connect?</div>
            : null
        }
        </>
    )
}