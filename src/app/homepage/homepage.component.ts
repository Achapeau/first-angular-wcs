import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(public fb: FormBuilder, public authService: AuthService) { }

  public form = this.fb.group({
    name: ['', [Validators.required]],
    role: ['']
  });

  newCustommer: customUser = new customUser('', Role.ANONYMOUS, false);

  onSubmit() {
    this.newCustommer = {
      name: this.form.value.name as string,
      role: this.form.value.role as Role,
      custommerConnected: true
    }
    this.authService.login(this.newCustommer.role);
    this.authService.getRole();
  }
}

export enum Role {
  ANONYMOUS = 'ANONYMOUS',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class customUser {
  name: string;
  role: Role;
  custommerConnected: boolean;
  constructor(name: string, role: Role, custommerConnected: boolean) {
    this.name = name;
    this.role = role;
    this.custommerConnected = custommerConnected; 
  }
}