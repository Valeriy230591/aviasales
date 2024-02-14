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