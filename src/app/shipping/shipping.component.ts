import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts = this.cartService.getShippingPrices();
  user: any;

  ngOnInit() {
    console.warn('sfsdasda TEST', this.user);
    console.log('USER::::::  ');
   // this.user = this.cartService.getUsers();
    console.log(this.user);
  }
}
