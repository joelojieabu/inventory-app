import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] | undefined;
  @Output() onProductSelected : EventEmitter<Product>;
  private currentProduct: Product | undefined;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  clicked (product: Product): void {
    this.currentProduct = product;
    // @ts-ignore
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct){
      return false
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit(): void {
  }

}
