import { TrainerService } from '../../services/trainer-service/trainer.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/classes/trainer/trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})

export class TrainerComponent implements OnInit {

  trainerList: Trainer[] = [];
  inputTrainerName: string = '';
  inputTrainerDOB!: Date;
  inputTrainerHobby: string = '';
  inputPictureUrl: string = '';
  showAddTrainer: boolean = false;

  placeHolderText: string = 'Please, introduce the name';
  placeHolderText2: string = 'Please, introduce the hobby';

  constructor(
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    this.findTrainers();
  }

  getPlaceHolder(): string {
    return this.placeHolderText;
  }

  getPlaceHolder2(): string {
    return this.placeHolderText2;
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.inputPictureUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openFiles(event:any){

    var files = event.target.files;
    for (var i = 0, len = files.length; i < len; i++) {

        var file = files[i];

        var reader = new FileReader();

        reader.onload = (function(f) {
            return event.target.result;
        })(file);

        reader.readAsText(file);
    }
}



createNewTrainer(): void {

      const trainer: Trainer = new Trainer(
      this.inputTrainerName,
      this.inputTrainerDOB,
      this.inputTrainerHobby,
      this.inputPictureUrl);
      this.trainerService.createTrainer(trainer);
    //Vuelves a llamar a la BBDD para actualizar la lista de trainers
      this.findTrainers();
  }

  findTrainers(): void {
    this.trainerList = [];
    this.trainerService.getAllTrainers().subscribe(dataResult => {
      for (let i = 0; i < dataResult.length; i++) {
        this.trainerList.push(new Trainer(
          dataResult[i].name,
          dataResult[i].birthDate,
          dataResult[i].hobby,
          dataResult[i].pictureUrl,
          dataResult[i].id,
        ))
      }
    });
  }

  delete(trainerId: number): void {
    // this.trainerList.splice(trainerId - 1, 1);
    this.trainerService.deleteTrainer(trainerId);
    this.findTrainers();
  }


  addTrainer():void {
    this.showAddTrainer = !this.showAddTrainer;

  }
}

