import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  
  @Input() product!: IProduct;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
