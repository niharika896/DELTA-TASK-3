import { createSlice } from '@reduxjs/toolkit'


export const Wallet = createSlice({
  name: 'Wallet',
  initialState: {
    value: 0,
  },
  reducers: {
    setWallet : (state,action) =>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setWallet } = Wallet.actions

export default Wallet.reducer