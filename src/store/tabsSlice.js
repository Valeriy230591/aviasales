import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD

=======
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
const tabsSlice = createSlice({
    name:'tabs',
    initialState:{
        tabs:[
<<<<<<< HEAD
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
=======
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
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
export default tabsSlice.reducer