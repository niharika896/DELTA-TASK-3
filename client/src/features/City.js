import { createSlice } from '@reduxjs/toolkit'

export const City = createSlice({
  name: 'City',
  initialState: {
    value: "Delhi",
  },
  reducers: {
    setCity : (state,action) =>{
        state.value = action.payload
    }
  },
})

export const { setCity } = City.actions

export default City.reducer