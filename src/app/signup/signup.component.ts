import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    user: '',
    pass: ''
  });
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  onSubmit(): void {
    // Process checkout data here
  
    console.warn('you be signed up', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit() {
  }

}