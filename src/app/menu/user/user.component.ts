import { Component } from '@angular/core';
import { DeveloperComponent } from './developer/developer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DeveloperComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {}
