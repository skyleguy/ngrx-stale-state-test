import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductDisplayComponent } from './components/product-display.component';
import { reducer, slice } from './+state/product.slice';
import { ProductEffects } from './+state/product.effects';

@NgModule({
  declarations: [AppComponent, ProductDisplayComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [slice.name]: reducer,
    }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
