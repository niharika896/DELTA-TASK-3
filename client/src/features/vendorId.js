import { createSlice } from '@reduxjs/toolkit'

export const vendorId = createSlice({
  name: 'vendorId',
  initialState: {
    value: "",
  },
  reducers: {
    setvendorId : (state,action) =>{
        state.value = action.payload
    }
  },
})

export const { setvendorId } = vendorId.actions

export default vendorId.reducer