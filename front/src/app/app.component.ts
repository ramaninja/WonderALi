import { stringify } from '@angular/compiler/src/util';
import { Component, DebugElement, EventEmitter, Output } from '@angular/core';
import { ProductService } from './DAO/ProductService';
import { flag } from './Model/flag';
import { Product } from './Model/product';

enum formsEnum { Commerce, Account, Description, Basket };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'App';

  IsAccountOpen:flag = new flag(false);  
  IsDescriptionOpen:flag =new flag(false);  
  IsCommerceOpen:flag = new flag(false);  
  IsBasketOpen:flag = new flag(false); 


  Forms:Map<formsEnum,flag> = new Map<formsEnum,flag>();

  public FilterText:string="";
  public List:Product[];
 
  public currentProduct:Product;

  // ajoute le service product à app-component. (tous les composants fils y ont accès).
  constructor(public productService:ProductService) {
      
      this.List = [];
      this.Forms =  new Map();
      
      this.currentProduct = new Product("unamed",0,0,"desciption");

      this.Forms.set(formsEnum.Commerce,this.IsCommerceOpen);
      this.Forms.set(formsEnum.Account,this.IsAccountOpen);
      this.Forms.set(formsEnum.Description,this.IsDescriptionOpen);
      this.Forms.set(formsEnum.Basket,this.IsBasketOpen);

    /* Test qui remplit la page automatiquement pour pouvoir tester les différentes pages sans avoir à taper xbox dans la bar de recherche : à commenter*/
      this.FilterText="xbox";
      this.DoSearch();
    }

  OuvrirCompte():void {
    console.log("Ouvrir la vue compte");
    this.ChangeForm(formsEnum.Account)
  }

  OuvrirPanier():void {
    console.log("Ouvrir le panier");
    this.ChangeForm(formsEnum.Basket);
    console.log(this.List.length);
  }

  // méthode pour changer de form.
  ChangeForm(form:formsEnum):void
  {
    let list = this.Forms.keys();
    
    for (let formName of list) {
      if(form == formName)
      {
        this.Forms.get(form)!.state = true;
      }
      else
      {
        this.Forms.get(formName)!.state = false;
      }
   }
  }

  DoSearch():void {    
    this.ChangeForm(formsEnum.Commerce)
  
    console.log("Commerce open ? " + this.IsCommerceOpen.state);
    
    console.log("FilterText : " + this.FilterText);
    if( this.FilterText != "" &&  this.FilterText != "xbox"){ // enlever xbox (c'est pour la démo)
      this.Search(this.FilterText);
      let i:number = 0;
    }

    let i = 0;

    // pour la démo
    if( this.FilterText == "xbox"){
      while(i<25){
        // console.log("lancer la recherche");
        this.List.push(new Product("XboxSX",550,i,
        "Access your favorite entertainment through apps like YouTube, Netflix, and more Enjoy over 100 games right out of the box with a 1 month Xbox Game Pass trial"
        + "Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon, Hulu, Microsoft Movies & TV, and more"
        + "Play with friends and family near and far—sitting together on the sofa or around the world on Xbox Live, the fastest, most reliable gaming network"
        + "Xbox One games and accessories work together"));
        i++;
      }
    }
  }

  // fonction interne qui cherche le produit parmis sa propre liste.
  GetProduct(id:number ):Product 
  {
    for( let product of this.List) {
        if(product.Product_Id == id){
          return product;
        }
    }
    return new Product("unamed",0,0,"Description");

  }

  OpenDescription(productId: number)
  {
      this.currentProduct = this.GetProduct(productId);
      // console.log(this.currentProduct.Id);
      this.ChangeForm(formsEnum.Description)
  }

  // appelle le service product
  Search(name:string):void {

    this.ChangeForm(formsEnum.Commerce)

    console.log("produit recherché :" + name);

    this.List = [] // on rince la liste

    this.productService.getProductsByName(name).forEach((product:Product) => {
      this.List.push(product);
    });
  }


  // appelle le service product
  SearchTag(tag:string):void{

    this.ChangeForm(formsEnum.Commerce)

    this.List = [] // on rince la liste

    this.productService.getProductsByCategory(tag).forEach((product:Product) => {
      this.List.push(product);
    });
  }
}
