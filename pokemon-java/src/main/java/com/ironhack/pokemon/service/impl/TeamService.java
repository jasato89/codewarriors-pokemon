package com.ironhack.pokemon.service.impl;

import com.ironhack.pokemon.DTO.TeamPostDTO;
import com.ironhack.pokemon.model.Pokemon;
import com.ironhack.pokemon.model.Team;
import com.ironhack.pokemon.model.Trainer;
import com.ironhack.pokemon.repository.PokemonRepository;
import com.ironhack.pokemon.repository.TeamRepository;
import com.ironhack.pokemon.repository.TrainerRepository;
import com.ironhack.pokemon.service.interfaces.IPokemonService;
import com.ironhack.pokemon.service.interfaces.ITeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService implements ITeamService {
    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private IPokemonService pokemonService;

    @Override
    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    @Override
    public void addTeam(Long id, String pokemonAsString) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(id);
        if (trainerOptional.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer with ID: " + id);
        Trainer trainer = trainerOptional.get();

        Pokemon pokemon;
        try {
            pokemon = pokemonService.savePokemon(pokemonAsString);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Couldn't create the Pokemon!");
        }

        Team team = new Team(trainer, pokemon);
        teamRepository.save(team);
    }

    @Override
    public void removeTeam(Long id) {
        Optional<Team> teamOptional = teamRepository.findById(id);
        if (teamOptional.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Team with that ID");
        teamRepository.deleteById(id);

    }
}
