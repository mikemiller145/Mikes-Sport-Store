import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
import { CartItem } from 'src/app/models/cart-item'

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  searchedProducts: Product [] = [];

  products: Product[] = [
    new Product(1, 'Basketball', 'This is the product description', 10, 'assets/img/basketball1.jpg'),
    new Product(2, 'Football', 'This is the product description', 20, 'assets/img/football1.jpg'),
    new Product(3, 'Soccerball', 'This is the product description', 25, 'assets/img/soccerball1.jpg'),
    new Product(4, 'Volleyball', 'This is the product description', 30, 'assets/img/volleyball1.jpg'),
    new Product(5, 'Basketball Hoop', 'This is the product description',500, 'assets/img/basketballhoop.jpg'),
    new Product(6, 'Baseball', 'This is the product description', 5, 'assets/img/baseball1.jpg'),
    new Product(7, 'Lacrosse Stick', 'This is the product description', 50, 'assets/img/stick1.jpg'),
    new Product(8, 'Lacrosse Ball', 'This is the product description', 5, 'assets/img/ball_yellow.jpg'),
    new Product(9, 'Soccer Goal', 'This is the product description', 300, 'assets/img/soccerGoal.jpg'),
];

  cartItems: CartItem[] = [];
  

  constructor() { }
  
  getProducts(): Product[]{
    return this.products;
  }
  
  getProductProfile(id){
    let product = this.products[id-1];
    return product;
  }

  addToCart(product: Product, quantity = 1) {
    console.log(quantity);
    let cartId = 1; 
    let alreadyInCart = false;   
    if(sessionStorage.getItem('cartID') !== null){
      cartId = JSON.parse(sessionStorage.getItem('cartID'));
    }
    if(JSON.parse(sessionStorage.getItem('cart')) !== null && JSON.parse(sessionStorage.getItem('cart')).length > 0){
      this.cartItems = JSON.parse(sessionStorage.getItem('cart'));
    }

    for(var i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].productId === product.id){
        if(quantity === 1){
          this.cartItems[i].qty++;
        }
        else{
          this.cartItems[i].qty += quantity;
        }
        alreadyInCart = true;
      }
    }
    if(!alreadyInCart){
      let item = new CartItem(product.name, product.id, product.price, cartId, product.imageUrl, quantity);
      cartId++;
      this.cartItems.push(item);
    }

    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
    sessionStorage.setItem('cartID', JSON.stringify(cartId));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
    console.log(JSON.parse(sessionStorage.getItem('cartID')));

    window.location.reload();

  }

  getCartItems(): CartItem[]{
    console.log(JSON.parse(sessionStorage.getItem('cart')));
    return JSON.parse(sessionStorage.getItem('cart'));
  }

  removeCartItem(cartItem: CartItem){
    this.cartItems = JSON.parse(sessionStorage.getItem('cart'));
    this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
    window.location.reload();
  }

  updateQuantity(event: any, cartItem: CartItem){
    console.log(event.target.value);
    this.cartItems = JSON.parse(sessionStorage.getItem('cart'));
    for(var i = 0; i < this.cartItems.length; i++){
      
      if(this.cartItems[i].id === cartItem.id){
        this.cartItems[i].qty = parseInt(event.target.value);
        console.log(this.cartItems[i].qty)
      }
    }
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
    window.location.reload();

  }

  getQuantity(){
    
    if(sessionStorage.getItem('cart') !== null)
    {
      this.cartItems = JSON.parse(sessionStorage.getItem('cart'));
    }
    let quantity = 0;

    if(this.cartItems !== null){
      for(var i = 0; i < this.cartItems.length; i++){
        quantity += this.cartItems[i].qty;
      }
    }
    
    return quantity;
  }

  searchProducts(searchValue: string){
    while(this.searchedProducts.length){
      this.searchedProducts.pop()
    }
    var regexSearch = new RegExp(searchValue + "[A-Za-z]*", "i");
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i].name.match(regexSearch))
      {
        this.searchedProducts.push(this.products[i]);
      }
    }
    return this.searchedProducts;

  }
}
