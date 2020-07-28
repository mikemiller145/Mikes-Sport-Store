import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductsRouting } from './products-routing.module';
import { ProductsDetailComponent } from './products-detail/products-detail.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ManageProductsService } from 'src/app/manage-products.service';
import { MessengerService } from 'src/app/messenger.service';
import { ProductItemComponent } from './products-overview/product-item/product-item.component';
import { ProductsSearchComponent } from './products-search/products-search.component'


@NgModule({
  declarations: [
    ProductsOverviewComponent,
    ProductsDetailComponent,
    ProductItemComponent,
    ProductsSearchComponent,
  ],
  exports: [
    ProductsOverviewComponent,
  ],
  imports: [
    CommonModule,
    ProductsRouting,
    NgbModule
  ],
  providers: [
    ManageProductsService,
  ]
})
export class ProductsModule { }
