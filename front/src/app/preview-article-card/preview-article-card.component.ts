import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-preview-article-card',
  templateUrl: './preview-article-card.component.html',
  styleUrls: ['./preview-article-card.component.css']
})

export class PreviewArticleCardComponent implements OnInit {

  @Input() public Id:number=0; // id number that will be used to navigate to the full description item.
  @Input() public Name:string="";
  @Input() public Price:number=0;
  @Input() public Description:string="";
  @Output('articleClicked') articleClicked =new EventEmitter<string>();

  public id:number= 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  public OpenArticle():void {
    console.log("Ouverture de l'article");
    const id = this.Id.toString();
    console.log("id :" + id);
    this.articleClicked.emit(id);
  }
  
}
