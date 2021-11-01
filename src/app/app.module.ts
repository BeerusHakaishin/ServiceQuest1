import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailService } from './shared/services/cocktail.service';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [AppComponent, CocktailListComponent],
  imports: [BrowserModule],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
