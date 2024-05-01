import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from "./create-onomatopia/create-onomatopia.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CreateOnomatopiaComponent, NgFor]
})
export class AppComponent {
  onomatopiaList: string[] = [];

  onReceiveOnomatopia(event: string):void {
    console.log(event);
    
    this.onomatopiaList.push(event);
  }
}
