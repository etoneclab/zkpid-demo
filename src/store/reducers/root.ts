import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {connected: false, request: false},
  reducers: {
    connected(state, action) {
        state.connected = action.payload.connection
    },
    request(state, action) {
        state.request = action.payload.connection
    }
  }
})

export const { connected, request } = authSlice.actions
export default authSlice.reducer