import { Injectable } from '@angular/core';
import { ProductState, slice } from '../+state/product.slice';
import { Store, select } from '@ngrx/store';
import { selectProducts } from '../+state/product.selectors';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  isWaitingForFakeObservable = false;
  fakeAsyncWait$ = new BehaviorSubject<boolean>(
    this.isWaitingForFakeObservable ? false : true
  );
  products$ = this.store.pipe(select(selectProducts));

  constructor(private readonly store: Store<ProductState>) {}

  public triggerRequests(): void {
    console.log('triggering the floodgates');
    if (this.isWaitingForFakeObservable) {
      this.fakeAsyncWait$.next(true);
    }
  }

  public requestProducts() {
    this.store.dispatch(slice.actions.requestProducts());
  }
}
