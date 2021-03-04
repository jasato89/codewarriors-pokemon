import { PokemonService } from './../../services/pokemon-service/pokemon.service';
import {Component, Input, NgModule, EventEmitter, OnInit, Output} from '@angular/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { Pokemon } from 'src/app/classes/pokemon/pokemon';
import { Team } from 'src/app/classes/team/team';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { TeamService } from 'src/app/services/team-service/team.service';
import { TrainerService } from 'src/app/services/trainer-service/trainer.service';
import { AppComponent } from "../../app.component";
import { PokemonList } from "../../classes/pokemon-list-class/pokemon-list";




@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})

export class PokesearchComponent implements OnInit {

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
  searchValue: string = ""

  @Output() updatePokemons = new EventEmitter();

  trainersList: Trainer[] = [];
  trainerSelected: number = -1;
  selectedPokemon!: Pokemon;

  @Input() team!: Team[];

  getPokemonList(): void {
    this.pokemonData = [];
    this.pokemonService.getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").subscribe(result => {
      result.results.forEach(((value, index) => {
        this.pokemonData.push(new Data(index, value.name[0].toUpperCase() + value.name.substr(1)));
      }));
    })
  }


selectPokemon(){
  this.pokemonService.getPokemonByName(this.pokemonKeyword).subscribe(dataResult =>{
    let stats: number[] = []
    for (let i =0; i< dataResult.stats.length; i++){
      stats.push(dataResult.stats[i].base_stat);
    }
    let types: string[] = []
    for (let i =0; i< dataResult.types.length; i++){
      types.push(dataResult.types[i].type.name);
    }
    let sprites: string[] = [dataResult.sprites.front_default]
      let newPoke:Pokemon = new Pokemon(
      dataResult.id,
      dataResult.name,
      stats,
      types,
      sprites,
    )
    newPoke.type[0]=dataResult.types[0].type.name;
    if(dataResult.types.length>1){
      newPoke.type[1]=dataResult.types[1].type.name;
    }
  this.selectedPokemon=newPoke;

  });

}

  getTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(data => {
      data.forEach(tr => this.trainersList.push(tr));
    })
  }

  selectEvent(item: Event) {
    this.pokemonId = Object.values(item)[0];
  }

  onChangeSearch(val: string) {
    this.updatePokemons.emit(val);

  }

  onFocused(e: any | Event): void {
    // do something when input is focused
  }

  async onSubmit(): Promise<void> {
    if (this.team.length > 6) {
      window.alert("Teams can only have 7 Pokemons and trainers");
    } else if (this.pokemonId === -1 || this.trainerSelected === -1) {

    } else {
      let pokemon = await this.pokemonService.getFullPokemon(this.pokemonId);
      await this.addPokemonToTeam(this.trainerSelected, JSON.stringify(pokemon));
      window.alert("Added to the team!");
      location.reload();
    }
  }

  async addPokemonToTeam(trainerId: number, pokemon: string) {
    let response = await this.teamService.addTeamItem(trainerId, pokemon);

  }

}

export class Data {
  constructor(private id: number, private name: string) {
  }
}
