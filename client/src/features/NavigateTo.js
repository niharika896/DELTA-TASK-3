import { createSlice } from '@reduxjs/toolkit'

export const NavigateTo = createSlice({
  name: 'NavigateTo',
  initialState: {
    value: "",
  },
  reducers: {
    setNavigateTo : (state,action) =>{
        state.value = action.payload
    }
  },
})


export const { setNavigateTo } = NavigateTo.actions

export default NavigateTo.reducer