import { TrainerService } from '../../services/trainer-service/trainer.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { Byte } from '@angular/compiler/src/util';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  pictureUrl: string = 'assets/images/Daco_4203200.png';
  showAddTrainer: boolean = false;
  trainer!: Trainer;

  placeHolderText: string = 'Please, introduce the name';
  placeHolderText2: string = 'Please, introduce the hobby';

  constructor(
    private trainerService: TrainerService,
    private sanitizer: DomSanitizer
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
        this.pictureUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async createNewTrainer(): Promise<void> {
    const trainer: Trainer = new Trainer(
      this.inputTrainerName,
      this.inputTrainerDOB,
      this.inputTrainerHobby,
      this.pictureUrl,
      []);
    console.log(this.pictureUrl);
    let response = await this.trainerService.createTrainer(trainer);
    console.log(response);
    // Vuelves a llamar a la BBDD para actualizar la lista de trainers
    this.findTrainers()
    this.showAddTrainer = false;
    alert("Trainer added!");
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
          dataResult[i].pokemonList,
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


  addTrainer(): void {
    this.showAddTrainer = !this.showAddTrainer;

  }

  // getImageSource(): SafeUrl{
  //   let picUrl = this.pictureUrl.toString();
  //   return this.sanitizer.bypassSecurityTrustUrl(picUrl);
  // }
}

