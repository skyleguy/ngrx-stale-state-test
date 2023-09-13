import { createSlice } from '@reduxjs/toolkit';
import { productCaseReducers } from './product.case-reducers';

export const productStateName = 'product';

export interface Product {
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  hasMadeRequest: boolean;
}

export const productInitialState: ProductState = {
  products: [],
  isLoading: false,
  hasMadeRequest: false,
};

export interface State {
  [productStateName]: ProductState;
}

export const slice = createSlice({
  name: productStateName,
  initialState: productInitialState,
  reducers: productCaseReducers,
});

export const { actions, reducer } = slice;
