import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service'
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item'

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.css']
})
export class CartOverviewComponent implements OnInit {


  cartTotal = 0;
  cartItems: CartItem [] = [];


  constructor(private _manageProductsService: ManageProductsService) { }

  ngOnInit() {

    
    this.cartItems = this._manageProductsService.getCartItems();
    
    if(this.cartItems != null){
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
    }
  }

}
