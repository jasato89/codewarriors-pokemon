import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon-service/pokemon.service";
import {PokemonList} from "../../classes/pokemon-list-class/pokemon-list";
import {Pokemon} from "../../classes/pokemon/pokemon";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokemonListService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemonList(this.currentUrl);
  }

  nextUrl: string = "";
  previousUrl: string = "";
  currentUrl: string = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  pokemonList: PokemonList = {} as PokemonList;
  pokemons: Pokemon[] = [] as Pokemon[];
  isActive: boolean[] = [];

  getPokemonList(url: string): PokemonList {
    this.pokemonList = {} as PokemonList;
    this.pokemonListService.getPokemonList(url).subscribe(result => {
        this.pokemonList = result;
        this.nextUrl = this.pokemonList.next;
        this.previousUrl = this.pokemonList.previous == null ? this.currentUrl : this.pokemonList.previous;
        this.getPokemons(this.currentUrl);
      }
    );
    return this.pokemonList;
  }

  forward(): void {
    this.currentUrl = this.nextUrl;
    this.getPokemonList(this.currentUrl);

  }

  backwards(): void {
    this.currentUrl = this.previousUrl;
    this.getPokemonList(this.currentUrl);


  }

  showStats(i: number): void {
    if (this.isActive[i] === true) {
      this.isActive[i] = false;
    } else {
      for (let num in this.isActive) {
        this.isActive[num] = false;
      }
      this.isActive[i] = true;
    }
  }


  getPokemons(url: string): void {
    this.pokemons = [];
    this.pokemonList.results.forEach((name, url) => {
      this.pokemonListService.getPokemon(name.url).subscribe(result => {

        let types: number = result.types.length;
        let typesString: string[] = [];
        for (let i = 0; i < types; i++) {
          typesString.push(result.types[i].type.name);

        }

        this.pokemons.push(
          new Pokemon(result.id,
            result.name[0].toUpperCase() + result.name.substr(1),
            [
              result.stats[0].base_stat,
              result.stats[1].base_stat,
              result.stats[2].base_stat,
              result.stats[3].base_stat,
              result.stats[4].base_stat,
              result.stats[5].base_stat],
            typesString,
            [
              result.sprites.front_default,
              result.sprites.front_female,
              result.sprites.front_shiny,
              result.sprites.front_shiny_female,
            ]));
        this.isActive.push(false);
      })


    });
  }

}
