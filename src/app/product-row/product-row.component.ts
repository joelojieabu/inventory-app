import { Component, Input, HostBinding, OnInit } from '@angular/core';
import {Product} from '../product.model'

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  // @ts-ignore
  @Input() product: Product;
  @HostBinding() ('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit(): void {
  }

}
