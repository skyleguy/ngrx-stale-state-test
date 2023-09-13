import { Injectable } from '@angular/core';
import { ProductState, slice } from '../+state/product.slice';
import { Store, select } from '@ngrx/store';
import { selectProducts } from '../+state/product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  products$ = this.store.pipe(select(selectProducts));

  constructor(private readonly store: Store<ProductState>) {}

  public requestProducts() {
    this.store.dispatch(slice.actions.requestProducts());
  }
}
