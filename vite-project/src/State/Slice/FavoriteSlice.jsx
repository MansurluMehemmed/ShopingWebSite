import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    list:[],
    
}
export const CardSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
       
        favoriteAdd:(state,action)=>{
            let i;
            if(!state.list.find((item,index)=>item.id === action.payload.id)){
                state.list = [action.payload,...state.list]
               
            }else{
                state.list =[ ...state.list.filter(item=>item.id!== action.payload.id)]
            }
            // console.log(state.list)
        }
       
    }
})
export const {favoriteAdd,favoriteDlt} =  CardSlice.actions
export default CardSlice.reducer