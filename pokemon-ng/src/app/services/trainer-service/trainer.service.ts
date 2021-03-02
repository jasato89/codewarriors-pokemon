import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemonDTO } from "../../classes/pokemon-dto/pokemon-dto";
import { Trainer } from "../../classes/trainer/trainer";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(
    private http: HttpClient
  ) { }

  readonly baseUrl: string = 'https://ironhack-pokemon.herokuapp.com';

  getAllTrainers(): Observable<Trainer[]> {
    const url = this.baseUrl + '/trainers';
    return this.http.get<Trainer[]>(url);
  }

  deleteTrainer(trainerId: number): void {
    this.http.delete(this.baseUrl + "/trainer/" + trainerId).subscribe(data => {
      console.log(data);
    });
  }

  createTrainer(trainer: Trainer):void{
    console.log(trainer);
    this.http.post(this.baseUrl+"/trainer", trainer).subscribe(data=>{
      console.log(data);
    });
  }
}
