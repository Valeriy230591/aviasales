import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name:"filters",
    initialState:{
        filters:[ {
            id: 1,
            name: "Все",
            completed: false,
          },
          {
            id: 2,
            name: "Без пересадок",
            completed: true,
          },
          {
            id: 3,
            name: "1 пересадка",
            completed: false,
          },
          {
            id: 4,
            name: "2 пересадки",
            completed: false,
          },
          {
            id: 5,
            name: "3 пересадки",
            completed: false,
          },]
    },
    reducers:{
        handleChangeFilters(state,action){
            const allActive = state.filters.every((item) => item.completed);
            if (action.payload === "Все") {
              state.filters = state.filters.map((item) => ({
                ...item,
                completed: !allActive,
              }));
            }
            const updatedFilters = state.filters.map((item) =>
              item.name === action.payload ? { ...item, completed: !item.completed } : item,
            );
            const allFiltersChecked = updatedFilters
              .slice(1)
              .every((item) => item.completed);
            state.filters = updatedFilters.map((item) =>
              item.name === "Все" ? { ...item, completed: allFiltersChecked } : item,
            );
          },
        },
})


export const {handleChangeFilters} = filterSlice.actions;
export default filterSlice.reducer