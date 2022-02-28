import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor(private cartService: CartService) {}

  usersData = this.cartService.getData();

  ngOnInit() {
    /*this.usersData = this.cartService.sendGetRequest();
    console.warn(this.usersData);*/
  }
}
