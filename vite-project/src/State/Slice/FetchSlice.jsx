import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
    isLoading:false,
    data:[],
    error:false,
    search:[]
}
export const fetchData = createAsyncThunk('fetchSlice',async()=>{
    const data = await fetch('http://localhost:4000/products');
    return data.json()
})
export const FetchSlice = createSlice({
    name:'fetch',
    initialState,
    reducers:{
        addSearch:(state,action)=>{
            state.search = state.search.filter(item=>item.title.trim().includes(action.payload))
           
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
            state.search = action.payload;
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const {addSearch} = FetchSlice.actions
export default FetchSlice.reducer