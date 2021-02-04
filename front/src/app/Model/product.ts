

export class Product {    
    public Name:string="";
    public Price:number=0;
    public Id:number=0;
    public Description:string="";

    public constructor(name:string,price:number,id:number,description:string){
        this.Name = name;
        this.Price = price;
        this.Id = id;
        this.Description = description;
    }  
  }
  