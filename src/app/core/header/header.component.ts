import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  isCartEmpty = true;
  cartQuantity = 0;
  constructor(private _manageProductsService: ManageProductsService) { }

  ngOnInit() {
    this.cartQuantity = this._manageProductsService.getQuantity();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
}
