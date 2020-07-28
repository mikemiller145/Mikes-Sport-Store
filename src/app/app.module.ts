import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from './cart/cart.module';
import { ManageProductsService } from './manage-products.service';
import { MessengerService } from 'src/app/messenger.service';
import { HandleproblemsComponent } from './handleproblems/handleproblems.component';

@NgModule({
  declarations: [
    AppComponent,
    HandleproblemsComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CoreModule,
    NgbModule,
    CartModule,
    AppRoutingModule,
  ],
  providers: [
    ManageProductsService,
    MessengerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
