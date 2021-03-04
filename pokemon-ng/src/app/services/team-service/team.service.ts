import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/classes/team/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private httpClient: HttpClient
  ) { }

  readonly baseUrl: string = 'https://ironhack-pokemon.herokuapp.com';

  getFullTeam(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.baseUrl}/teams`);
  }

  getFullTeamExperiment(): Observable<[{
    id: number,
    trainer: {
      id: number
    }
  }]> {
    return this.httpClient.get<[{
      id: number,
      trainer: {
        id: number
      }
    }]>(`${this.baseUrl}/teams`);
  }

  async addTeamItem(trainerId: number, pokemon: string): Promise<void> {
    await this.httpClient.post<string>(`${this.baseUrl}/team/${trainerId}`, pokemon).toPromise();
  }

  async removeTeamItem(itemId: number): Promise<void> {
    await this.httpClient.delete(`${this.baseUrl}/team/${itemId}`).toPromise();
  }
}
