import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
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

  async createTrainer(trainer: Trainer): Promise<void> {
    await this.http.post<Trainer>(this.baseUrl + "/trainer", this.body(trainer)).toPromise();
  }

  body(trainer: Trainer): any {
    let trainerBody: any = {
      name: trainer.name,
      birthDate: trainer.birthDate,
      hobby: trainer.hobby,
      pictureUrl: trainer.pictureUrl
    }
    console.log(trainerBody);
    return trainerBody;
  }

  async addPokemonToTrainer(trainerId:number, pokemon:string): Promise<void>{
    await this.http.put<any>(this.baseUrl + "/trainer/" + trainerId + "/add-pokemon", pokemon).toPromise();
  }

  async removePokemonFromTrainer(trainerId:number, pokemonId:number): Promise<void>{
    await this.http.put<any>(this.baseUrl+ "/trainer/" + trainerId + "/remove-pokemon/" + pokemonId, "").toPromise();
  }

}








