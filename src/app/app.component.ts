import { Component, OnInit } from '@angular/core';
import { ProductFacadeService } from './services/product-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductFacadeService) {}

  public ngOnInit(): void {
    if (this.productService.isWaitingForFakeObservable) {
      setTimeout(() => {
        this.productService.triggerRequests();
      }, 2000);
    }
  }
}
