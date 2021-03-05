import { Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonList } from 'src/app/classes/pokemon-list-class/pokemon-list';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { TrainerService } from 'src/app/services/trainer-service/trainer.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  constructor(
    private trainerService: TrainerService
  ) { }

  @ViewChild('form') form!: NgForm;
  @Output() trainersList: Trainer[] = [];

  pokemonList: PokemonList = {} as PokemonList;
  pokemonKeyword = 'name';
  pokemonName: string = '';

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(data => {
      data.forEach(tr => this.trainersList.push(tr));
    })
  }

  // async getPokemonByName(name: string): Promise<Object> {
  //   let data = await this.pokemonService.getPokemonByName(name).then(data => {
  //     console.log(data);
  //     return data;
  //   });
  //   return data;
  // }

}
