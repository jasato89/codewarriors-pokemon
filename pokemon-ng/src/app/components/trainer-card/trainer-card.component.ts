import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from 'src/app/classes/trainer/trainer';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {

  @Input() trainer!: Trainer;
  @Input("trainerIndex") index!: number;

  @Output() deleteTrainerEvent = new EventEmitter();
  url: string =''
  hover: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number): void {
    this.deleteTrainerEvent.emit(index);
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
} 


}
