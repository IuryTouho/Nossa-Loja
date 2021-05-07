import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    //Primeiro pegue o product id do current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Encontre o produto que corresponde com o id trazido no route
    this.product = products.find(product => product.id === productIdFromRoute);
    // 

    /* 1
    this.product = products.find(product => product.id === productIdFromRoute);
    */

    /* 2
    this.product = products.find(function (product) {
      return product.name === 'Celular Samsung'
    });
    */
    
    /* 3
    const func = function (product) {
      return product.id === productIdFromRoute
    }

    this.product = products.find(func);
    */
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado no carrinho!');
  }

}
