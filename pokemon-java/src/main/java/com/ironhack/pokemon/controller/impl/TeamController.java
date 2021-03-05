package com.ironhack.pokemon.controller.impl;

import com.ironhack.pokemon.DTO.TeamPostDTO;
import com.ironhack.pokemon.controller.interfaces.ITeamController;
import com.ironhack.pokemon.model.Team;
import com.ironhack.pokemon.service.interfaces.ITeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeamController implements ITeamController {
    @Autowired
    private ITeamService teamService;

    @Override
    @GetMapping("/teams")
    @CrossOrigin
    public List<Team> getTeams() {
        return teamService.getTeams();
    }

    @Override
    @PostMapping("/team/{trainer-id}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    public void addTeam(@PathVariable(name = "trainer-id") Long id, @RequestBody String pokemonAsString) {
        teamService.addTeam(id, pokemonAsString);
    }

    @Override
    @DeleteMapping("/team/{id}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void removeTeam(@PathVariable Long id) {
        teamService.removeTeam(id);
    }
}
