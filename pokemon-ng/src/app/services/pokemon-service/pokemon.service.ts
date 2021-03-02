import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../../classes/pokemon-list-class/pokemon-list";
import {Pokeinterface} from "../../interfaces/pokeinterface";
import {Pokemon} from "../../classes/pokemon/pokemon";
import {Trainer} from "../../classes/trainer/trainer";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly baseUrl: string = 'https://ironhack-pokemon.herokuapp.com';

  constructor(private http: HttpClient) { }

  getPokemonList(url:string): Observable<PokemonList> {
    return this.http.get<PokemonList>(url);
  }

  getPokemon(url:string) : Observable<Pokeinterface> {
    console.log("Get pokemon" + url)
    return this.http.get<Pokeinterface>(url);
  }

  getAllTrainer():Observable<Trainer[]>{
    const url = this.baseUrl + '/trainers';
    return this.http.get<Trainer[]>(url);
  }

  deleteTrainer(trainerId:number):void{
    this.http.delete('https://ironhack-pokemon.herokuapp.com/trainer/' + trainerId).subscribe(data=>
    console.log('Trainer deleted'));
  } 
}



 



