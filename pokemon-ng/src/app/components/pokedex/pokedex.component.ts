import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon-service/pokemon.service";
import {PokemonList} from "../../classes/pokemon-list-class/pokemon-list";

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

  nextUrl: string = "https://pokeapi.co/api/v2/pokemon";
  previousUrl: string = "https://pokeapi.co/api/v2/pokemon";
  currentUrl: string = "https://pokeapi.co/api/v2/pokemon";
  pokemonList: PokemonList = this.getPokemonList(this.currentUrl);

  getPokemonList(url: string): PokemonList {
    this.pokemonListService.getPokemonList(url).subscribe(result => {
        this.pokemonList = result;
        this.nextUrl = this.pokemonList.next;
        this.previousUrl = this.pokemonList.previous == null ? this.currentUrl : this.pokemonList.previous;
      }
    );
    return this.pokemonList;
  }

  forward():void {
    this.currentUrl = this.nextUrl;
    this.getPokemonList(this.currentUrl);

  }

  backwards():void {
    this.currentUrl = this.previousUrl;
    this.getPokemonList(this.currentUrl);

  }

}
