import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { connected: "", request: false, toggleKYC: false },
  reducers: {
    connected (state, action) {
      state.connected = action.payload.connection
    },
    request (state, action) {
      state.request = action.payload.connection
    },
    toggleKYC (state) {
      state.toggleKYC = !state.toggleKYC
    }
  }
})

export const { connected, request, toggleKYC } = authSlice.actions
export default authSlice.reducer
