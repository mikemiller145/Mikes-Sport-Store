import { Component, OnInit, Input } from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service'
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  quantityOptions = [];
  
  constructor(private _manageProductsService: ManageProductsService, private router: Router) {
    for (var i = 1; i <= 15; i++){
      this.quantityOptions.push(i);
    }
   }

  ngOnInit(): void {
  }

  handleRemoveCartItem(){
    this._manageProductsService.removeCartItem(this.cartItem);
  }

  handleUpdateQuantity(event){
    console.log(event.target.value);
    this._manageProductsService.updateQuantity(event, this.cartItem);
  }

  getProductDetail(cartItem: CartItem){
    this.router.navigate(['/products', cartItem.productId]);
  }
}
