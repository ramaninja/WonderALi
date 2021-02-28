import { Input } from '@angular/core';
import { DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-descriptif',
  templateUrl: './descriptif.component.html',
  styleUrls: ['./descriptif.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DescriptifComponent implements OnInit {

  @Input() public product:Product = new Product("unamed",0,0,"un produit");


  constructor() { }

  isPopupOpen:boolean = false;

 
  ngOnInit(): void 
  {

  }

  ngOnChanges(): void {
    console.log("prod price " + this.product.Price)
  }

  ngDoCheck() {
    
  }

  AddToBasket():void{
    console.log("Bouton ajouter au panié appuyé.")
    // just here to have a feedback.
    this.isPopupOpen = true;
  }

  ClosePopup():void{
    this.isPopupOpen = false;
  }
  
}
