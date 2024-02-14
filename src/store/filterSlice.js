import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filters',
    initialState:{
        filters: [
            { label: "Все", name: "all", completed: false,id:1 },
            { label: "Без пересадок", name: "not", completed: true,id:2 },
            { label: "1 пересадка", name: "one", completed: false,id:3 },
            { label: "2 пересадка", name: "two", completed: false,id:4 },
            { label: "3 пересадка", name: "three", completed: false,id:5 },
        ]},
    reducers:{
        setActiveFilter: (state, action) => {
            const allActive = state.filters.every((item) => item.completed);
      
            if (action.payload === "all") {
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
              item.name === "all" ? { ...item, completed: allFiltersChecked } : item,
            );
          },
    }
})
export const { setActiveFilter } = filterSlice.actions;

export default filterSlice.reducer;