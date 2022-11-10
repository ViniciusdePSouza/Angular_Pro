import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StockInventoryModules } from './stock-inventory/pages/stock-inventory.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
