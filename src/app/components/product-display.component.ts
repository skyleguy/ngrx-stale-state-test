import { Component, OnInit } from '@angular/core';
import { ProductFacadeService } from '../services/product-facade.service';
import { Product } from '../+state/product.slice';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
})
export class ProductDisplayComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductFacadeService) {
    this.products$ = this.productService.products$;
  }

  public ngOnInit(): void {
    this.productService.requestProducts();
  }
}
