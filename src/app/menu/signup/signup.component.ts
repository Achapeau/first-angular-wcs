import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  newOrder: Order = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  minDate: string;

  constructor() {
    const today = new Date();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    this.minDate = today.getFullYear() + '-' + month + '-' + day;
   }


  
  
  onSubmit() {
    console.table(this.newOrder);
    confirm("Confirmer vous les données suivantes?" + JSON.stringify(this.newOrder));

  }
  
}

export interface Order {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}