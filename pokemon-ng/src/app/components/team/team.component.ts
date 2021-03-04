import {Output, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PokemonList} from 'src/app/classes/pokemon-list-class/pokemon-list';
import {Team} from 'src/app/classes/team/team';
import {TeamService} from 'src/app/services/team-service/team.service';
import {PokemonService} from "../../services/pokemon-service/pokemon.service";
import {TrainerService} from "../../services/trainer-service/trainer.service";
import {Trainer} from "../../classes/trainer/trainer";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  constructor(
    private teamService: TeamService,
    private pokemonListService: PokemonService,
    private trainerService: TrainerService
  ) {
  }

  trainers: Trainer[] = [];
  @ViewChild('form') form!: NgForm;

  pokemonList: PokemonList = {} as PokemonList;

  pokemonKeyword = 'name';
  pokemonName: string = '';
  @Output() teamList: Team[] = [];

  ngOnInit(): void {
    this.getTeamList();
    console.log(this.teamList);
  }

  getTeamList(): void {
    this.teamList = [];
    this.teamService.getFullTeam().subscribe(data => {
      data.forEach(tr => this.teamList.push(tr));

    })

  }

  translateTeams(): void {
    this.teamList.forEach((team) => {
      if(!this.trainers.find(e => e.id ===team.trainer.id)) {
        this.trainers.push()
      }



    })

  }

}

  // async getPokemonByName(name: string): Promise<Object> {
  //   let data = await this.pokemonService.getPokemonByName(name).then(data => {
  //     console.log(data);
  //     return data;
  //   });
  //   return data;
  // }

