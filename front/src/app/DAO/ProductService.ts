import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Product } from '../Model/product';

@Injectable({
    providedIn:'root'
})

export class ProductService {

    // Mettre le bon end pointde l'api rest
    endpoint = "http://products-service";
    
    
    httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }).set('Access-Control-Allow-Origin', 'http://products-service')
        .set('Access-Control-Allow-Methods', 'GET, DELETE')
      }  

    constructor(private httpClient: HttpClient) { }

     getProductsByName(productName:string): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + '/api/product/findbyname?name='+productName)
        .pipe(
          retry(1),
          catchError(this.processError)
        )
      }
    
      getProductsByCategory(categoryName:string): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + '/api/product/findbycategory?category='+categoryName, this.httpHeader)
        .pipe(
          retry(1),
          catchError(this.processError)
        )
      }

      // pas sûr
      getSingleProduct(id:string): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + '/api/product/?id=' + id)
        .pipe(
          retry(1),
          catchError(this.processError)
        )
      }  


    processError(err: { error: { message: string; }; status: any; message: any; }) {
        let message = '';
        if(err.error instanceof ErrorEvent) {
         message = err.error.message;
        } else {
         message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(message);
        return throwError(message);
     }

}