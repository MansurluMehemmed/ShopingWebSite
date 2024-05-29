import { createSlice } from "@reduxjs/toolkit";
import React, { act } from "react";
const initialState = {
  list: [],
};
export const CardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {

        //  action payloaddan gelen dataya gore find eleyecem eger tapsam tapdigim datani state cixaracam

        // cixartdigim datanin icerisinde count adinda propertisin sayini 1 vahid artiracam daha sonra yeniden set edecem/

        // eger find etmesem undefined olsa bir basha set edecem
      let i;
       if(state.list.find((item,index)=>{
        i=index
        return item.id === action.payload.id})){
        state.list[i].count++
        state.list = [...state.list]
        
       }else{
        state.list = [...state.list,action.payload]
       }


    },

    deleteBtn: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    deleteAll: (state, action) => {
      state.list = [];
    },
  },
});
export const { add, deleteBtn, deleteAll } = CardSlice.actions;
export default CardSlice.reducer;
