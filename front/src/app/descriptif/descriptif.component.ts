import { Input } from '@angular/core';
import { DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-descriptif',
  templateUrl: './descriptif.component.html',
  styleUrls: ['./descriptif.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
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
