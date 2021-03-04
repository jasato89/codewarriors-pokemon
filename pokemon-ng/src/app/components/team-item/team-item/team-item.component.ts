import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/classes/team/team';
import { TeamService } from 'src/app/services/team-service/team.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() item!: Team;
  @Input() index!: number;

  constructor(
    private teamService: TeamService
  ) { }

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

  async removeItem(index: number) {
    let response = await this.teamService.removeTeamItem(index).then(() => {
      location.reload();
    });
  }

}


