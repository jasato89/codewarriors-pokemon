import {Component, NgModule, OnInit} from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {AppComponent} from "../../app.component";
import {PokemonList} from "../../classes/pokemon-list-class/pokemon-list";
import {PokemonService} from "../../services/pokemon-service/pokemon.service";

@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})

export class PokesearchComponent implements OnInit {


  constructor(private pokemonListService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemonList();
  }

  pokemonList: PokemonList = {} as PokemonList;


  pokemonKeyword = 'name';
  pokemonData: Data[] = [];

  userKeyword = 'name';
  userData: Data[] = [new Data(0, "Pedro"), new Data(1, "Jose")];

  getPokemonList():void {
    this.pokemonData = [];
    this.pokemonListService.getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").subscribe(result =>{
      result.results.forEach(((value, index) => {

        this.pokemonData.push(new Data(index, value.name[0].toUpperCase() + value.name.substr(1)));

      }));

    })
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
  constructor(private id : number, private name: string) {
  }
}
