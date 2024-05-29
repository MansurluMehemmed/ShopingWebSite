import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../../Companents/Main/Category/Category'
const initialState = {
    category:'All'
}
export const CategorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        cate:(state,action)=>{
            state.category = action.payload
            // console.log(action.payload)
        }
    }
})
export const  {cate} = CategorySlice.actions
export default CategorySlice.reducer