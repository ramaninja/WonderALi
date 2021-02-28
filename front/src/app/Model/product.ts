import { Observable } from "rxjs";


export class Product {    
    public Name:string="";
    public Price:number=0;
    public Product_Id:number=0;
    public Category:string="";
    public Description:string="";

    public constructor(Name:string,Price:number,Product_Id:number,Category:string="", description:string=""){
        this.Name = Name;
        this.Price = Price;
        this.Product_Id = Product_Id;
        this.Category=""; // todo         
        this.Description = description;
    }    
  }
  