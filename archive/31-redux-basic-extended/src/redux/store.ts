import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer.ts'

const store = configureStore({
  reducer: counterReducer
})

export default store
