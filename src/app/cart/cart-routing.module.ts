import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';

const routes: Routes = [
  {path: '', component: CartOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRouting { }