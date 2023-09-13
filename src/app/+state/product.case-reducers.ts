import { PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from './product.slice';

export const productCaseReducers = {
  requestProducts: (state: ProductState): ProductState => state,
  fetchProducts: (): ProductState => {
    return {
      products: [],
      isLoading: true,
      hasMadeRequest: true,
    };
  },
  fetchProductsSuccess: (
    state: ProductState,
    { payload }: PayloadAction<{ products: Product[] }>
  ): ProductState => {
    return {
      ...state,
      products: payload.products,
      isLoading: false,
    };
  },
};
