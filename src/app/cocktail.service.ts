import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  listCocktails: Cocktail[] = [
    { name: 'Mojito', price: 10, image: 'mojito.jpg' },
    { name: 'Cosmopolitan', price: 15, image: 'cosmopolitan.jpg' },
    { name: 'Negroni', price: 10, image: 'negroni.jpg' },
    { name: 'Old Fashioned', price: 15, image: 'oldfashioned.jpg' },
    { name: 'Whisky Sour', price: 12.5, image: 'whiskysour.jpg' },
    { name: 'Manhattan', price: 15, image: 'manhattan.jpg' },
    { name: 'Bloody Mary', price: 12.5, image: 'bloodymary.jpg' },
    { name: 'Irish Coffee', price: 12.5, image: 'irishcoffee.jpg' },
    { name: 'Mint Julep', price: 12.5, image: 'mintjulep.jpg' },
    { name: 'Cuba Libre', price: 12.5, image: 'cubalibre.jpg' },
    { name: 'Margarita', price: 12.5, image: 'margarita.jpg' },
    { name: 'Long Island', price: 12.5, image: 'longisland.jpg' },
    { name: 'Horse\'s Neck', price: 12.5, image: 'horseneck.jpg' },
    { name: 'Mimosa', price: 12.5, image: 'mimosa.jpg' },
    { name: 'Dry Martini', price: 12.5, image: 'drymartini.jpg' },
    { name: 'Gin Tonic', price: 12.5, image: 'gintonic.jpg' }
  ];
  getCocktails() {
    return this.listCocktails;
  }

  constructor() { }
}
