import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => {
  return new Promise<{ value: number }>((resolve) => {
    setTimeout(() => {
      resolve({ value: 1 })
    }, 1000)
  })
})
export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => {
  return new Promise<{ value: number }>((resolve) => {
    setTimeout(() => {
      resolve({ value: 1 })
    }, 1000)
  })
})

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload.value
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.count -= action.payload.value
      })
  }
})

export default counterSlice.reducer
