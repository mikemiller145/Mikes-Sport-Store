import { Component, OnInit} from '@angular/core';
import { ManageProductsService } from 'src/app/manage-products.service';
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/product'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  productItem: Product;


  constructor(private _manageProductsService: ManageProductsService, private route: ActivatedRoute) { }
  
  detailItem = "col-sm-6 border rounded-right shadow-sm";
  counter = 1;

  ngOnInit(){
    
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id');
      this.productItem = this._manageProductsService.getProductProfile(id);
    });
  }

  Popout(){
    this.detailItem = "col-sm-6 border rounded-right shadow-lg";
  }
  Popback(){
    this.detailItem = "col-sm-6 border rounded-right shadow-sm";
  }

  handleAddToCart(){
    this._manageProductsService.addToCart(this.productItem, this.counter);
  }

  incrementCounter(){
    if(this.counter < 15){
      this.counter++;
    }
  }
  decrementCounter(){
    if(this.counter > 1){
      this.counter--;
    }
  }
}
