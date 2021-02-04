import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit {
   
  @Input() public List:Product[] = [];


  ngOnInit(): void {
  }

}
