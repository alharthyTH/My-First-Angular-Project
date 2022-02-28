import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public REST_API_SERVER = 'http://localhost:8080/employees';
  products = products;
  image: any;
  images: Array<string>;
totalAngularPackages: any;

  constructor(
    private http: HttpClient
  )
  {
    this.images = [];
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


  ngOnInit() {
    for(let i=0;i<this.images.length;++i){
      this.images[i] =this.products[i].image;
    
    }
/*
    this.http.get<any>(this.REST_API_SERVER).subscribe(data => {
        this.totalAngularPackages = data.total;
    })     */  
   console.warn(this.totalAngularPackages);
  }
  

}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/