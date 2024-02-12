import { configureStore } from "@reduxjs/toolkit"
import filterReducer from './filterSlice'
import tabsReducer from './tabsSlice'
export default configureStore({
    reducer:{
        filters:filterReducer,
        tabs:tabsReducer
    }
})