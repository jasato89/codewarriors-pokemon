import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Trainer } from 'src/app/classes/trainer/trainer';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {

  @Input() trainer!: Trainer;
  @Input() trainerId!: number;

  @Output() deleteTrainerEvent = new EventEmitter();
  url: string =''
  hover: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() -birthDate.getMonth();

    if(months < 0 || (months === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    
    return age;
  }

  delete(trainerId: number): void {
    this.deleteTrainerEvent.emit(this.trainerId);
  }
} 

