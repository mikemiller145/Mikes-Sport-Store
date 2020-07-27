import { Component, Input , OnInit } from '@angular/core';
import { Product } from 'src/app/models/product'
import { ManageProductsService } from 'src/app/manage-products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private _manageProductsService: ManageProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this._manageProductsService.addToCart(this.productItem);
  }

  getProductDetail(productItem: Product){
    this.router.navigate(['/products', productItem.id]);
  }
}
