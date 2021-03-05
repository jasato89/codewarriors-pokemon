import { Component, Input, OnInit, Output } from '@angular/core';
import { PokemonDTO } from 'src/app/classes/pokemon-dto/pokemon-dto';
import { PokemonList } from 'src/app/classes/pokemon-list-class/pokemon-list';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';
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
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  pokemonList: PokemonList = {} as PokemonList;

  pokemonKeyword = 'name';
  pokemonData: Data[] = [];
  pokemonId: number = -1;

  @Input() trainersList: Trainer[] = [];
  trainerSelected: number = -1;


  getPokemonList(): void {
    this.pokemonData = [];
    this.pokemonService.getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").subscribe(result => {
      result.results.forEach(((value, index) => {
        this.pokemonData.push(new Data(index, value.name[0].toUpperCase() + value.name.substr(1)));
      }));
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
      if (this.trainerHasPokemon(trainer, pokemon)) {
        window.alert(`The trainer already has that Pokemon!`);
      } else {
        await this.addPokemonToTrainer(trainer, JSON.stringify(pokemon));
        window.alert("Added to the team!");
        location.reload();
      }
    }
  }

  trainerHasPokemon(trainer: Trainer, pokemon: Object): boolean {
    let pokemonId = Object.values(pokemon)[6];

    if (trainer.pokemonList.length < 1) {
      return false;
    } else {
      let exist = false;
      trainer.pokemonList.forEach(pok => {
        let pokemonDTO = pok as PokemonDTO;
        if (pokemonDTO.pokemonId == pokemonId) {
          exist = true;
        }
      })
      return exist;
    }
  }

  async addPokemonToTrainer(trainer: Trainer, pokemon: string) {
    let response = await this.trainerService.addPokemonToTrainer(trainer.id, pokemon);
    console.log(response);
  }
}

export class Data {
  constructor(private id: number, private name: string) {
  }
}
