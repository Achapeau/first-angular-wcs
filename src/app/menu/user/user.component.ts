import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(public fb: FormBuilder, private router: Router) {}

  public myForm = this.fb.group({
    username:['user', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    number:[0, []],
    complement:['', []],
    street:['', [Validators.required]],
    zipcode: [99999, [Validators.required]],
    city:['', [Validators.required]],
  })

  custommerCreate: boolean = false;
  newAdresse: Address = {
    numberStreet: 0,
    complement: '',
    street: '',
    city: '',
    zipcode: 0
  }
  newCustommer: Custommer = {
    username: '',
    email: '',
    password: '',
    address: this.newAdresse
  } 
  onSubmit() {  
    this.newAdresse = {
      numberStreet: this.myForm.controls.number.value as number,
      complement: this.myForm.controls.complement.value as string,
      street: this.myForm.controls.street.value as string,
      city: this.myForm.controls.city.value as string,
      zipcode: this.myForm.controls.zipcode.value as number
    }
    this.newCustommer = {
      username: this.myForm.controls.username.value as string,
      email: this.myForm.controls.email.value as string,
      password: this.myForm.controls.password.value as string,
      address: this.newAdresse
    }    
  this.custommerCreate = !this.custommerCreate;
  }
  changeUsername(): void {
    this.myForm.controls.username.setValue('new user');
  }

  goToMenu(): void {
    this.router.navigate(['']);
  }
  
}

export interface Address {
  numberStreet: number;
  complement: string;
  street: string;
  city: string;
  zipcode: number;
}

export interface Custommer  {
  username: string;
  email: string;
  password: string;
  address: Address;
}
