import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CartRouting } from './cart-routing.module';
import { CartItemComponent } from './cart-overview/cart-item/cart-item.component';
import { ManageProductsService } from 'src/app/manage-products.service'

@NgModule({
  declarations: [
    CartOverviewComponent, 
    CartItemComponent],
  imports: [
    CommonModule,
    NgbModule,
    CartRouting,
    
  ],
  exports: [
    CartOverviewComponent
  ],
  providers: [
    ManageProductsService
  ]
})
export class CartModule { }
