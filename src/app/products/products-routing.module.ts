import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import {  ProductsSearchComponent } from 'src/app/products/products-search/products-search.component';

const routes: Routes = [
  {path: '', component: ProductsOverviewComponent},
  {path: 'products/search/:newSearchValue', component: ProductsSearchComponent},
  {path: 'products/:id', component: ProductsDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRouting { }