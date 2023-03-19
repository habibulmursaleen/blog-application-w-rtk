const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    sortSelected: (state, action) => {
      state.sort = action.payload;
    },
    filterSelected: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortSelected, filterSelected } = filterSlice.actions;
