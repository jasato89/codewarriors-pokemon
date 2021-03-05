package com.ironhack.pokemon.service.interfaces;

import com.ironhack.pokemon.model.Team;

import java.util.List;

public interface ITeamService {
    List<Team> getTeams();

    void addTeam(Long id, String pokemonAsString);

    void removeTeam(Long id);
}
