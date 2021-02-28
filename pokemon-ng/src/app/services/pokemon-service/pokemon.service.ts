import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../../classes/pokemon-list-class/pokemon-list";
import {Pokeinterface} from "../../interfaces/pokeinterface";
import {Pokemon} from "../../classes/pokemon/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(url:string): Observable<PokemonList> {
    return this.http.get<PokemonList>(url);
  }

  getPokemon(url:string) : Observable<Pokeinterface> {
    console.log("Get pokemon" + url)
    return this.http.get<Pokeinterface>(url);
  }

}
