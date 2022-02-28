import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    user: '',
    pass: ''
  });

  nextClicked = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    if(this.nextClicked) {
      ////
      console.warn('LOGIN TEST', this.checkoutForm.value);
     }else {
      console.warn('sfsdasda TEST', this.checkoutForm.value);
       ////
     }
    
  
  }
  public onNextClick(): void {
    this.nextClicked = true;
  }

  public onPreviousClick(): void {
    this.nextClicked = false;
  }

  ngOnInit() {
  }

}