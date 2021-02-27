import { Input } from '@angular/core';
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

  ngOnInit(): void {
  }

  DeleteFromBasket():void {
    console.log("Utiliser l'api basket et faire un delete");
    // product.Product_Id pour l'id
  }
}
