import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice'
import tabsReducer from './tabsSlice'
const store = configureStore({
    reducer:{
        filters:filterReducer,
        tabs:tabsReducer,
    }
})
export default store