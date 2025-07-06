import { createSlice } from '@reduxjs/toolkit'

export const Type = createSlice({
  name: 'Type',
  initialState: {
    value: "user",
  },
  reducers: {
    setType : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setType } = Type.actions

export default Type.reducer