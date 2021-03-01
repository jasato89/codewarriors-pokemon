package com.ironhack.pokemon.controller.interfaces;

import com.ironhack.pokemon.DTO.TrainerGetDTO;
import com.ironhack.pokemon.DTO.TrainerPostDTO;

import java.util.List;

public interface ITrainerController {
    List<TrainerGetDTO> getAllTrainers();

    TrainerGetDTO getTrainerById(Long id);

    TrainerGetDTO getTrainerByName(String name);

    TrainerGetDTO createTrainer(TrainerPostDTO trainerPostDTO);

    String deleteTrainerById(Long id);

    TrainerGetDTO addPokemonToTrainer(Long id, String pokemonAsString);

    TrainerGetDTO removePokemonFromTrainer(Long id, Integer pokemonId);
}
