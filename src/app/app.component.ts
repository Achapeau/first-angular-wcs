import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAdmin: boolean = false;
  title: string = "Youhou!!!... (désolé, j'ai pas la passion)";

  onClick() {
    this.isAdmin = !this.isAdmin;
  }
}
