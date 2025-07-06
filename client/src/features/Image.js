import { createSlice } from '@reduxjs/toolkit'

export const Image = createSlice({
  name: 'Image',
  initialState: {
    value:"",
  },
  reducers: {
    setImage : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImage } = Image.actions

export default Image.reducer