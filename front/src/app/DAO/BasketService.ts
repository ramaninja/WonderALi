import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../Model/product';

@Injectable({
    providedIn:'root'
})

export class BasketService {

    endpoint = "http://localhost:5002";
    
    
    httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
    })}
    
      

    constructor(private httpClient: HttpClient) { }

    getBasket(userId:string): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + '/api/basket?userid=' + userId)
        .pipe(
          retry(1),
          catchError(this.processError)
        );
      }


     addProductToBasket(userId:string, productId:string): void {
        this.httpClient.post(this.endpoint + '/api/basket?userid='+userId +'&productid='+productId,"") // à voir
        .pipe(
          retry(1),
          catchError(this.processError)
        )
      }
    
      deleteProductFromBasket(userId:string):void {
        this.httpClient.delete<Product>(this.endpoint + '/api/basket?userid='+userId)
        .pipe(
          retry(1),
          catchError(this.processError)
        )
      }

      clearUserBasket(userId:string):void {
        const body  =JSON.stringify(userId);
        console.log(body)
        this.httpClient.post(this.endpoint + '/api/basket/clear',body,{'headers':this.httpHeader.headers})
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