import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/root'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
