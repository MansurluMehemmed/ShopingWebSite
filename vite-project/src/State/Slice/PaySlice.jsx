import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
export const PaySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    addPay: (state, action) => {
      state.list = [...state.list,...action.payload]
      
    
    },
    deletePay:(state,action)=>{
        state.list = []
    }
  },
});
export const { addPay,deletePay } = PaySlice.actions;
export default PaySlice.reducer;
