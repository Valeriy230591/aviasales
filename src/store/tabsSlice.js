import { createSlice } from "@reduxjs/toolkit";

const tabsSlice = createSlice({
    name:'tabs',
    initialState:{
        tabs:[
    { label: "Самый дешевый", name: "cheapest", active: true },
    { label: "Самый быстрый", name: "fastest", active: false },
    { label: "Оптимальный", name: "optimal", active: false },
        ]
    },reducers:{
        activeTab:(state,action)=>{
            const activeTabName = action.payload;
            state.tabs.forEach((tab) => {
                tab.active = tab.name === activeTabName;
            })
        }
    }
})
export const{activeTab}=tabsSlice.actions
export default tabsSlice.reducer