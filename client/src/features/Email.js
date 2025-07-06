import { createSlice } from '@reduxjs/toolkit'


export const Email = createSlice({
  name: 'Email',
  initialState: {
    value:"",
  },
  reducers: {
    setEmail : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEmail } = Email.actions

export default Email.reducer