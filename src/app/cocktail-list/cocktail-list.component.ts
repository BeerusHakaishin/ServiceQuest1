import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktails: { name: string; price: number; img: string }[] | undefined;
  constructor(private cocktailsService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.getCocktails();
  }
}