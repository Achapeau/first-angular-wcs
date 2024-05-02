import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CocktailListComponent]
})
export class AppComponent {
  title = "Youhou!!!... (désolé, j'ai pas la passion)";
}
