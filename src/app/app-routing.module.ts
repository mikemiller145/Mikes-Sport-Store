import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandleproblemsComponent } from './handleproblems/handleproblems.component';


const routes: Routes = [
  {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
  {path: 'products', loadChildren: './products/products.module#ProductsModule'},
  {path: "", redirectTo: "products", pathMatch: "full"},
  {path: "**", component: HandleproblemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
