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
export const { setWallet } = Wallet.actions

export default Wallet.reducer