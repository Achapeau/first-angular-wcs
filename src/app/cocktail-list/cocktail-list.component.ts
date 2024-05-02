import { Component, OnInit, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent implements OnInit {
  private cocktailsService = inject(CocktailService);
  cocktails: Cocktail[] = [];

  ngOnInit(): void {
      this.cocktailsService.getCocktails().subscribe((cocktailsJson) => {
        this.cocktails = cocktailsJson
      })
  }
}
