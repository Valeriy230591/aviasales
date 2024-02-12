import { createSlice } from "@reduxjs/toolkit";
const tabsSlice = createSlice({
    name:'tabs',
    initialState:{
        tabs:[
            { id: 1, label: "Самый дешевый", active: true },
            { id: 2, label: "Самый быстрый", active: false },
            { id: 3, label: "Оптимальный", active: false },
          ]
    },
    reducers:{
        handleChangeTabs(state,action){
                
                state.tabs = state.tabs.map(tab => ({
                    ...tab,
                    active: tab.id === action.payload, 
                }));
        }
    }
})
export const {handleChangeTabs} = tabsSlice.actions;
export default tabsSlice.reducer