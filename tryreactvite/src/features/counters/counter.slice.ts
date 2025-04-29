import { createSlice } from '@reduxjs/toolkit'
import { CounterState } from '../../types/counter.type'

// Set the initial state of the counter
const initialState: CounterState = {
  value: 0,
}

// Create a slice for counter with actions and reducers
export const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Increment action increases the counter value by 1
    increment: (state) => {
      state.value += 1
    },
    // Decrement action decreases the counter value by 1
    decrement: (state) => {
      state.value -= 1
    },
    // Reset action sets the counter value back to 0
    reset: (state) => {
      state.value = 0
    }
  }
})

// Export actions for use in components
export const { increment, decrement, reset } = counterSlice.actions
// Export the reducer to be used in the store
export default counterSlice.reducer

