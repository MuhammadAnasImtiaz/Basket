import { BasketService } from './../../basket/basket.service';
import { ShopService } from '../shop.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:IProduct;
  quantity = 1;
  
  constructor(private shopService:ShopService, private activeRoute : ActivatedRoute,private bcService:BreadcrumbService,
    private basketService : BasketService) {
    this.bcService.set('@productDetails',' ')
   }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){

      this.quantity--;
      
    }
  }
  loadProduct(){
    this.shopService.getProduct(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails',product.name);
    },
    error => {
      console.log(error);
    })
  }

}
