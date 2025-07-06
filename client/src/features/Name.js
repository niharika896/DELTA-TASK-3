import { createSlice } from '@reduxjs/toolkit'


export const Name = createSlice({
  name: 'Name',
  initialState: {
    value:"",
  },
  reducers: {
    setName : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName } = Name.actions

export default Name.reducer