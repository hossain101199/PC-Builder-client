import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categories/categoriesSlice";
import pcBuilderSlice from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    pcBuilder: pcBuilderSlice.reducer,
  },
});
