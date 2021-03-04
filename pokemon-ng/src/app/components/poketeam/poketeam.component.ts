import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/classes/pokemon-list-class/pokemon-list';
import { Team } from 'src/app/classes/team/team';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';
import { TeamService } from 'src/app/services/team-service/team.service';
import { TrainerService } from 'src/app/services/trainer-service/trainer.service';

@Component({
  selector: 'app-poketeam',
  templateUrl: './poketeam.component.html',
  styleUrls: ['./poketeam.component.css']
})
export class PoketeamComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    private trainerService: TrainerService,
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.getPokemonList();
    this.getTrainers();
  }

  pokemonList: PokemonList = {} as PokemonList;

  pokemonKeyword = 'name';
  pokemonData: Data[] = [];
  pokemonId: number = -1;

  trainersList: Trainer[] = [];
  trainerSelected: number = -1;

  // @Input() team!: Team[];

  getPokemonList(): void {
    this.pokemonData = [];
    this.pokemonService.getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").subscribe(result => {
      result.results.forEach(((value, index) => {
        this.pokemonData.push(new Data(index, value.name[0].toUpperCase() + value.name.substr(1)));
      }));
    })
  }

  getTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(data => {
      data.forEach(tr => this.trainersList.push(tr));
    })
  }

  selectEvent(item: Event) {
    this.pokemonId = Object.values(item)[0];
    console.log(this.pokemonId);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any | Event): void {
    // do something when input is focused
  }


  async onSubmit(): Promise<void> {
    let trainer = this.trainersList.find(tr => tr.id == this.trainerSelected) as Trainer;

    if (this.pokemonId === -1 || this.trainerSelected === -1) {
    } else if (trainer.pokemonList.length > 6) {
      window.alert("Team cannot have more than 7 Pokemons!");
    } else {
      let pokemon = await this.pokemonService.getFullPokemon(this.pokemonId + 1);
      // if (this.trainerHasPokemon(trainer, pokemon)) {
      //   window.alert(`The trainer already has that Pokemon!`);
      // } else {
      await this.addPokemonToTrainer(trainer, JSON.stringify(pokemon));
      window.alert("Added to the team!");
      location.reload();

    }
  }

  // trainerHasPokemon(trainer:Trainer, pokemon: Object): boolean{
  //   let pokemonId = Object.values(pokemon)[6];
  //   trainer.pokemonList.forEach(pok=> {
  //     console.log(Object.values(pok)[2]);
  //   })

  //   return true;
  // }

  async addPokemonToTrainer(trainer: Trainer, pokemon: string) {
    let response = await this.trainerService.addPokemonToTrainer(trainer.id, pokemon);
  }

}

export class Data {
  constructor(private id: number, private name: string) {
  }
}
