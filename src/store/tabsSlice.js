import { createSlice } from "@reduxjs/toolkit";

const tabsSlice = createSlice({
    name:'tabs',
    initialState:{
        tabs:[
            { label: "Самый дешевый", name: "cheapest", active: true ,id:1},
            { label: "Самый быстрый", name: "fastest", active: false ,id:2},
            { label: "Оптимальный", name: "optimal", active: false ,id:3},
        ]
    },reducers:{
        setActiveTab: (state, action) => {
            state.tabs = state.tabs.map((item) =>
              item.name === action.payload
                ? { ...item, active: true }
                : { ...item, active: false },
            );
          },
    }
})
export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;