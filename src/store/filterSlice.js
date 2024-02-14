import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filters: [
      { label: "Все", name: "all", active: false, id: 1 },
      { label: "Без пересадок", name: "not", active: true, id: 2 },
      { label: "1 пересадка", name: "one", active: false, id: 3 },
      { label: "2 пересадка", name: "two", active: false, id: 4 },
      { label: "3 пересадка", name: "three", active: false, id: 5 },
    ],
  },
  reducers: {
    activeFilter: (state, action) => {
      const id = action.payload;

      state.filters = state.filters.map(filter =>
        filter.id === id ? { ...filter, active: !filter.active } : filter
        
      );
    },
  },
});

export const { activeFilter } = filterSlice.actions;

export default filterSlice.reducer;