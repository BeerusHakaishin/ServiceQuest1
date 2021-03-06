import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails() {
    return [
      {
        name: 'Bloody Mary',
        price: 8,
        img: 'https://img.cuisineaz.com/660x660/2018/09/29/i142997-bloody-mary.jpeg',
      },
      {
        name: 'Vodka Redbull',
        price: 9,
        img: 'https://thumbs.dreamstime.com/b/boisson-d-aluminium-de-red-bull-energy-avec-glace-et-gouttes-vodka-absolut-est-la-%C3%A9nerg%C3%A9tique-plus-populaire-au-monde-redbull-156680084.jpg',
      },
      {
        name: 'Tek Paf',
        price: 6,
        img: 'http://komenfofer.com/wp-content/uploads/2016/01/Tequila-Paf.jpg',
      },
    ];
  }
}