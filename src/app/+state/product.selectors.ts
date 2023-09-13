import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, slice } from './product.slice';

export const selectProductState = createFeatureSelector<ProductState>(
  slice.name
);
export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);
export const selectHasMadeRequest = createSelector(
  selectProductState,
  (state) => state.hasMadeRequest
);
