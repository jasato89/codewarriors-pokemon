package com.ironhack.pokemon.controller.interfaces;

import com.ironhack.pokemon.model.Team;

import java.util.List;

public interface ITeamController {
    List<Team> getTeams();

    void addTeam(Long id, String pokemonAsString);

    void removeTeam(Long id);
}
