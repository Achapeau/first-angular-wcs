import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserProfileComponent, MenuComponent]
})
export class AppComponent {
  title = "Youhou!!!... (désolé, j'ai pas la passion)";
}
