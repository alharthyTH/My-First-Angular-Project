import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  num = 0;
  i = 0;
  public REST_API_SERVER = 'http://localhost:8080/employees';
  log: any;
  /* . . . */

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.num += product.price;
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  getPrice() {
    console.log(this.num);
    return this.num;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  getData() {
    return this.http.get<{ name: string; age: string; location: string }[]>(
      '/assets/user.json'
    );
  }

  sendGetRequest() {
    return this.http.get(this.REST_API_SERVER);
  }
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.REST_API_SERVER)
      .pipe(catchError(this.handleError<User[]>('getUserss', [])));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
