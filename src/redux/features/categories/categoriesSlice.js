import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, actions) => {
      state.categoryList = actions.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice;
