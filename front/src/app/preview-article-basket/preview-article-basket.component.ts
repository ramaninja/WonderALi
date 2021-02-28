import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-preview-article-basket',
  templateUrl: './preview-article-basket.component.html',
  styleUrls: ['./preview-article-basket.component.css']
})
export class PreviewArticleBasketComponent implements OnInit {

  constructor() { }
  
  @Input() public product:Product = new Product("unamed",0,0,"un produit");
  @Output('DeleteFromBasket') deleteButtonClicked =new EventEmitter<number>();

  ngOnInit(): void {
  }

  DeleteFromBasket():void
  {
    const id = this.product.Product_Id;
    this.deleteButtonClicked.emit(id)
  }
}
