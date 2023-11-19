import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Color, ProductWidget } from "../../../types";

export const fetchProducts = createAsyncThunk<Array<ProductWidget>, void>("productWidget/fetchProducts", async () => {
  try {
    const response = await axios.get("https://api.mocki.io/v2/016d11e8/product-widgets");
    return response.data as Array<ProductWidget>;
  } catch (error) {
    throw new Error("Failed to fetch data from the API");
  }
});

export interface ProductWidgetState {
  products: Array<ProductWidget>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductWidgetState = {
  products: [],
  status: "idle",
  error: null,
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
    changeLinkedState: (state, action: PayloadAction<{ productId: number }>) => {
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
    changeActivity: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;

      // Set the active state to true for the specified product and false for others
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            active: !product.active,
          };
        }
        return {
          ...product,
          active: false,
        };
      });
      state.products = updatedProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // This line updates the products with the fetched data
        state.error = null;
        console.log(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

// Action creators are generated for each case reducer function
export const { changeColor, changeLinkedState, changeActivity } = productWidgetSlice.actions;

export default productWidgetSlice.reducer;
