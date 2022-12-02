import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  ascSort: true,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setAscSort(state, action) {
      state.ascSort = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setAscSort } = filterSlice.actions;

export default filterSlice.reducer;
