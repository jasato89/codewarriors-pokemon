import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexCardComponent } from './components/pokedex-card/pokedex-card.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { TeamComponent } from './components/team/team.component';
import { TeamItemComponent } from './components/team-item/team-item/team-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexCardComponent,
    TrainerComponent,
    TrainerCardComponent,
    TeamComponent,
    TeamItemComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
