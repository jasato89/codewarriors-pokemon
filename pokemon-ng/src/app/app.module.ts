import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexCardComponent } from './components/pokedex-card/pokedex-card.component';
import { PokesearchComponent } from './components/pokesearch/pokesearch.component';
import { NavBarComponent } from './components/main/nav-bar.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { TeamComponent } from './components/team/team.component';
import { TeamItemComponent } from './components/team-item/team-item/team-item.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import { PoketeamComponent } from './components/poketeam/poketeam.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexCardComponent,
    TrainerComponent,
    TrainerCardComponent,
    TeamComponent,
    TeamItemComponent,
    PokesearchComponent,
    NavBarComponent,
    TrainerCardComponent,
    TrainerComponent,
    NotFoundComponent,
    PoketeamComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
