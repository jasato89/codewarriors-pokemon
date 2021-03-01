import { PokemonService } from './../../services/pokemon-service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/classes/trainer/trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})

export class TrainerComponent implements OnInit {

  trainerList: Trainer[] = [];
  trainerId: number= -1;
  trainerName: string = '';
  trainerAge: number = 0;
  trainerHobby: string = '';
  trainerPhoto: string = '';
  url: string ='';
 

  placeHolderText: string = 'Please, introduce the name';
  placeHolderText2: string = 'Please, introduce the hobby';

  constructor(
    private trainerService:PokemonService
  ) { }


  getPlaceHolder(): string {
    return this.placeHolderText;
  }

  getPlaceHolder2(): string {
    return this.placeHolderText2;
  }

  createNewTrainer(photo?: string): void {

    const trainer: Trainer = new Trainer(this.trainerId, this.trainerName, this.trainerAge, this.trainerHobby, photo, true);
    this.trainerList.push(trainer);
    }
 
  delete(trainerId: number): void {
    
      this.trainerList.splice(trainerId-1, 1);
      this.trainerService.deleteTrainer(trainerId);
   
    }

    ngOnInit(): void {
    }

}

