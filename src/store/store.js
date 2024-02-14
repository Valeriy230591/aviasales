<<<<<<< HEAD
import {configureStore,} from '@reduxjs/toolkit'
import  ticketsReducer from './tiketSlice'
import tabsReducer from './tabsSlice'
import filtersReducer from './filterSlice'
const store = configureStore({
    reducer:{
        filters:filtersReducer,
        tabs:tabsReducer,
        // tickets:ticketsReducer,
    },
    
})
export default store;
=======
import { configureStore } from "@reduxjs/toolkit"
import filterReducer from './filterSlice'
import tabsReducer from './tabsSlice'
export default configureStore({
    reducer:{
        filters:filterReducer,
        tabs:tabsReducer
    }
})
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
