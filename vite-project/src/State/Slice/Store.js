import { configureStore } from "@reduxjs/toolkit";
import fetchReduser from "./FetchSlice";
import cartReduser from "./CardSlice";
import favoriteReduser from "./FavoriteSlice";
import categoryReduser from "./CategorySlice";
import payReducer from "./PaySlice";

export const store = configureStore({
    reducer:{
        fetch: fetchReduser,
        cart:cartReduser,
        favori:favoriteReduser,
        category:categoryReduser,
        pay:payReducer,
    }
})