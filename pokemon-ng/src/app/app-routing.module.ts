import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexComponent} from "./components/pokedex/pokedex.component";
import {TrainerComponent} from "./components/trainer/trainer.component";

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'trainers',
    component: TrainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
