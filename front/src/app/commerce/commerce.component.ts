import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit {
   
  @Input() public List:Product[] = [];
  @Output('articleClicked') articleClicked =new EventEmitter<number>();

  ngOnInit(): void {

  }

  SendIdToParent(productId: number)
  {
    const id = productId;
    this.articleClicked.emit(id)
  }
}
