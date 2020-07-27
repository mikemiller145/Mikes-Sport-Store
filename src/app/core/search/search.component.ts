import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product [] = [];

  constructor(private _manageProductsService: ManageProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSearch(newSearch: string){
    console.log(newSearch);
    this.router.navigate(['/products/search', newSearch]);
  }

}
