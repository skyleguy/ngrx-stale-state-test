import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ProductState, slice } from './product.slice';
import { Store, select } from '@ngrx/store';
import { selectHasMadeRequest } from './product.selectors';
import { filter, of, switchMap } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<Record<string, ProductState>>
  ) {}

  requestProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(slice.actions.requestProducts),
      concatLatestFrom(() => this.store.pipe(select(selectHasMadeRequest))),
      filter(([, hasMadeRequest]) => {
        console.log(hasMadeRequest);
        return !hasMadeRequest;
      }),
      switchMap(() => {
        console.log('dispatching fetchProducts');
        return of(slice.actions.fetchProducts());
      })
    )
  );

  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(slice.actions.fetchProducts),
      switchMap(() => {
        return of(
          slice.actions.fetchProductsSuccess({
            products: [
              {
                name: 'Fidget Spinner',
                price: 10,
              },
            ],
          })
        );
      })
    )
  );
}
