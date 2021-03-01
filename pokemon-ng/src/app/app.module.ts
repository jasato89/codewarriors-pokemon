import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexCardComponent } from './components/pokedex-card/pokedex-card.component';
import { PokesearchComponent } from './components/pokesearch/pokesearch.component';
import {AutocompleteLibModule} from "angular-ng-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexCardComponent,
    PokesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
