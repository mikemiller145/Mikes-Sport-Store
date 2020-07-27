import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.css']
})
export class ProductsOverviewComponent implements OnInit {

  

  products: Product [] = [];
  constructor(private _manageProductsService: ManageProductsService) { }

  ngOnInit() {
    this.products = this._manageProductsService.getProducts();
  }

}
