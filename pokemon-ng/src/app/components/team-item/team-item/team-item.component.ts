import { Component, Input, OnInit } from '@angular/core';
import { PokemonDTO } from 'src/app/classes/pokemon-dto/pokemon-dto';
import { Trainer } from 'src/app/classes/trainer/trainer';
import { TrainerService } from 'src/app/services/trainer-service/trainer.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() item!: Trainer;
  @Input() index!: number;
  @Input() trainers!: Trainer[];

  pokemon!: PokemonDTO;
  areShown: boolean = false;

  constructor(
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {

  }

  getName(pokemon: Object): void {
    let pokemonDTO = pokemon as PokemonDTO;
    this.pokemon = pokemonDTO;
  }

  getAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  getBasicStats(statsString: string): string {
    let stats: [] = JSON.parse(statsString);
    let result = '';

    stats.forEach(element => {
      let baseStat = Object.values(element)[1];
      let statArray = Object.values(element)[0];

      let statName = Object.values(statArray as [])[0];
      if (statName as string === 'hp') {
        result += " HP: " + baseStat;
      }
      if (statName as string === 'attack') {
        result += " Attack: " + baseStat;
      }
      if (statName as string === 'defense') {
        result += " Defense: " + baseStat;
      }
      if (statName as string === 'speed') {
        result += " Speed: " + baseStat;
      }
    })

    return result;
  }

  async removePokemonFromTrainer(trainerId: number, pokemonId: number) {
    console.log(trainerId);
    console.log(pokemonId);
    let response = await this.trainerService.removePokemonFromTrainer(trainerId, pokemonId).then<void>(()=> {
      console.log("deleted");
    });

    location.reload();
  }

  showPokemons() {
    this.areShown = !this.areShown;

  }
}


