import { createSlice } from '@reduxjs/toolkit'

export const isCityChosen = createSlice({
  name: 'CityChosen',
  initialState: {
    value: false,
  },
  reducers: {
    togglerCity : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { togglerCity } = isCityChosen.actions

export default isCityChosen.reducer