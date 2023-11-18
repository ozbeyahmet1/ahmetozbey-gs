import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Color, ProductWidget } from "../../../types";

export interface ProductWidgetState {
  products: Array<ProductWidget>;
}

const initialState: ProductWidgetState = {
  products: [
    {
      id: 1,
      type: "plastic bottles",
      amount: 100,
      action: "collects",
      active: true,
      linked: true,
      selectedColor: "green",
    },
    {
      id: 2,
      type: "trees",
      amount: 10,
      action: "plants",
      active: false,
      linked: false,
      selectedColor: "black",
    },
    {
      id: 3,
      type: "carbon",
      amount: 20,
      action: "offsets",
      active: false,
      linked: false,
      selectedColor: "blue",
    },
  ],
};

export const productWidgetSlice = createSlice({
  name: "productWidget",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<{ productId: number; newColor: Color }>) => {
      const { productId, newColor } = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            selectedColor: newColor,
          };
        }
        return product;
      });

      state.products = updatedProducts;
    },
    toggleLinked: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            linked: !product.linked,
          };
        }
        return product;
      });

      state.products = updatedProducts;
    },
    activeStateChanger: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      // Set the active state to true for the specified product and false for others
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            active: !product.active,
          };
        }
        return product;
      });

      state.products = updatedProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor, toggleLinked, activeStateChanger } = productWidgetSlice.actions;

export default productWidgetSlice.reducer;
