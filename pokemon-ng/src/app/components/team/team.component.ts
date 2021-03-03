import { Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonList } from 'src/app/classes/pokemon-list-class/pokemon-list';
import { Team } from 'src/app/classes/team/team';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';
import { TeamService } from 'src/app/services/team-service/team.service';
import { TrainerService } from 'src/app/services/trainer-service/trainer.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private teamService: TeamService,
  ) { }

  @ViewChild('form') form!: NgForm;

  trainersList: Trainer[] = [];
  trainerSelected: number = -1;
  pokemonList: PokemonList = {} as PokemonList;
  pokemonData: Data[] = [];
  pokemonKeyword = 'name';
  pokemonName: string = '';
  teamList: Team[] = [];

  ngOnInit(): void {
    this.getTrainers();
    console.log(this.trainersList);
    this.getTeamList();
    console.log(this.teamList);
  }

  getTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(data => {
      data.forEach(tr => this.trainersList.push(tr));
    })
  }

  getTeamList(): void {
    this.teamList = [];
    this.teamService.getFullTeam().subscribe(data => {
      data.forEach(tr => this.teamList.push(tr));
    })
  }

  getPokemonList():void {
    this.pokemonData = [];
    this.pokemonService.getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").subscribe(result =>{
      result.results.forEach(((value, index) => {

        this.pokemonData.push(new Data(index, value.name[0].toUpperCase() + value.name.substr(1)));

      }));

    })
  }



  async onSubmit(): Promise<void> {
    if (this.teamList.length > 6) {
      window.alert("Teams can only have 7 Pokemons and trainers");
    } else {

      console.log(this.trainerSelected);
      console.log(this.pokemonName);
      let pokemon: Object = await this.getPokemonByName(this.pokemonName);
      const pokemonSize: number = Object.keys(pokemon).length;
      if (pokemonSize < 5) {
        window.alert("No Pokemon found with that name");
      } else {
        await this.addPokemonToTeam(this.trainerSelected, JSON.stringify(pokemon));
        window.alert("Added to the team!");
      }
    }

    location.reload();
  }

  async getPokemonByName(name: string): Promise<Object> {
    let data = await this.pokemonService.getPokemonByName(name).then(data => {
      console.log(data);
      return data;
    });
    return data;
  }

  async addPokemonToTeam(trainerId: number, pokemon: string) {
    let response = await this.teamService.addTeamItem(trainerId, pokemon);

  }

  selectEvent(item: Event) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any | Event): void {
    // do something when input is focused
  }


}
export class Data {
  constructor(private id: number, private name: string) {
  }
}
