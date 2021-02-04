import { Component, DebugElement, EventEmitter, Output } from '@angular/core';
import { Product } from './Model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'App';
  IsInAccount:boolean = false;
  
  IsDescription:boolean =false;

  public FilterText:string="";
  public List:Product[];
 
  constructor() {
    this.List = [];
  }

  OuvrirCompte():void {
    console.log("Ouvrir la vue compte");
    this.IsInAccount = true;
    this.IsDescription = false;
  }

  OuvrirPanier():void {
    this.IsInAccount = false;
    this.IsDescription = true;
    console.log("Ouvrir le panier");
  }

  DoSearch():void {
    this.IsInAccount = false; // todo faire avec un méthode qui toggle bien tous booleans etc..
    this.IsDescription = false;

    console.log("FilterText : " + this.FilterText);
    this.Search(this.FilterText);
    let i:number = 0;
    while(i<25){
      // console.log("lancer la recherche");
      this.List.push(new Product("XboxSX",550,i,"Console de salon"));
      i++;
    }
  }

  OpenDescription(event: Event)
  {
      console.log("Id de l'article selectionné : " + event);
  }

  Search(tag:string):void {
    console.log("tag :" + tag); 
  }
}
