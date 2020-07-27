import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/product'
import { ManageProductsService } from 'src/app/manage-products.service';


@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  searchValue: string;
  searchedProducts: Product [] = [];

  constructor(private _manageProductsService: ManageProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
    this.searchValue = params.get('newSearchValue');
    this.searchedProducts = this._manageProductsService.searchProducts(this.searchValue);
    console.log(this.searchedProducts)
    });
  }



}
