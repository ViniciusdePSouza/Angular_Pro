import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

//smart component
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component'

//dumb components
import { StockBranchComponent } from '../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../components/stock-selector/stock-selector.component';

@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent
    ],

    imports: [ 
        ReactiveFormsModule, 
        CommonModule
    ],

    exports: [
        StockInventoryComponent
    ]
})

export class StockInventoryModules {

}