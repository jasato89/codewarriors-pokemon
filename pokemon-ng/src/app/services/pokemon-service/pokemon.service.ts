import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemonList } from "../../classes/pokemon-list-class/pokemon-list";
import { Pokeinterface } from "../../interfaces/pokeinterface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly baseUrl: string = 'https://ironhack-pokemon.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(url: string): Observable<PokemonList> {
    return this.http.get<PokemonList>(url);
  }

  getPokemon(url: string): Observable<Pokeinterface> {
    return this.http.get<Pokeinterface>(url);
  }

 /*  async getPokemonByName(name: string): Promise<Observable<any>> {
    let response = await this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).toPromise();
    return response;
  } */

  getPokemonByName(name: string):Observable<Pokeinterface> {
    return this.http.get<Pokeinterface>('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  async getFullPokemon(id: number): Promise<Observable<any>> {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await this.http.get<any>(url).toPromise();
    return response;
  }

}
