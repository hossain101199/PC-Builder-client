import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  products: [],
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setProduct: (state, actions) => {
      state.products.push(actions.payload);
      state.totalPrice += actions.payload.price;
    },
  },
});

export const { setProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice;
