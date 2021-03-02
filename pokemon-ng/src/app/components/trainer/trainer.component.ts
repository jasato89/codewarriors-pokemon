import { PokemonList } from './../../classes/pokemon-list-class/pokemon-list';
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
  trainerAge: string = "";
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

  createNewTrainer(): void {
    const trainer: Trainer = new Trainer(this.trainerId, this.trainerName, this.trainerAge, this.trainerHobby, this.trainerPhoto);
    this.trainerList.push(trainer);
    }

    findTrainer():void{
    this.trainerList = [];
    this.trainerService.getAllTrainer().subscribe((dataResult)=>{
      console.log(dataResult)
      for(let i=0; i<dataResult.length;i++){
        this.trainerId = dataResult[i].id;
        this.trainerName = dataResult[i].name;
        this.trainerAge= dataResult[i].birthDate;
        this.trainerHobby=dataResult[i].hobby;
        this.trainerPhoto = dataResult[i].pictureUrl;
        this.trainerList.push(new Trainer(this.trainerId, this.trainerName, this.trainerAge, this.trainerHobby,
        this.trainerPhoto))
      }
    });
  }

  delete(trainerId: number): void {
      this.trainerList.splice(trainerId-1, 1);
      this.trainerService.deleteTrainer(trainerId);
    }

    ngOnInit(): void {
    }

}

