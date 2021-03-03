import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import {PokedexComponent} from "./components/pokedex/pokedex.component";
import { TeamComponent } from './components/team/team.component';
import {TrainerComponent} from "./components/trainer/trainer.component";

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'trainers',
    component: TrainerComponent
  },
  {
    path: 'teams',
    component: TeamComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
