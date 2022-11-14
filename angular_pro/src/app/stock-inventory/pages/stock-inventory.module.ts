import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

//smart component
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component'

//dumb components
import { StockBranchComponent } from '../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../components/stock-selector/stock-selector.component';

//services
import { StockInventoryService } from '../service/stock-inventory.service'

@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent
    ],

    providers: [
        StockInventoryService
    ],

    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        HttpClientModule,
    ],

    exports: [
        StockInventoryComponent
    ],
})

export class StockInventoryModules {

}