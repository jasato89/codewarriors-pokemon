package com.ironhack.pokemon.service.impl;

import com.ironhack.pokemon.DTO.TrainerGetDTO;
import com.ironhack.pokemon.DTO.TrainerPostDTO;
import com.ironhack.pokemon.model.Pokemon;
import com.ironhack.pokemon.model.Trainer;
import com.ironhack.pokemon.repository.TrainerRepository;
import com.ironhack.pokemon.service.interfaces.IPokemonService;
import com.ironhack.pokemon.service.interfaces.ITrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrainerService implements ITrainerService {
    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private IPokemonService pokemonService;


    @Override
    public List<TrainerGetDTO> getAllTrainers() {
        List<Trainer> trainerList = trainerRepository.findAll();
        return trainerListToDTO(trainerList);
    }

    @Override
    public TrainerGetDTO getTrainerById(Long id) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(id);
        if (trainerOptional.isPresent())
            return trainerToDTO(trainerOptional.get());
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Trainer found with ID: " + id);
    }

    @Override
    public TrainerGetDTO getTrainerByName(String name) {
        Optional<Trainer> trainerOptional = trainerRepository.findTrainerByName(name);
        if (trainerOptional.isPresent())
            return trainerToDTO(trainerOptional.get());
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Trainer found with name: " + name);
    }

    @Override
    public TrainerGetDTO createTrainer(TrainerPostDTO trainerPostDTO) {
        Trainer trainer;
        try {
            trainer = new Trainer(
                    trainerPostDTO.getName(),
                    trainerPostDTO.getBirthDate(),
                    trainerPostDTO.getPictureUrl()
            );
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Something wrong in the TrainerPostDTO sent");
        }
        trainer = trainerRepository.save(trainer);
        return trainerToDTO(trainer);
    }

    @Override
    public String deleteTrainerById(Long id) {
        try {
            TrainerGetDTO trainer = getTrainerById(id);
            trainerRepository.deleteById(id);
            return "Trainer with ID: " + id + " deleted!";
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.I_AM_A_TEAPOT, "Something went wrong trying to delete the Trainer...");
        }
    }

    @Override
    public TrainerGetDTO addPokemonToTrainer(Long id, String pokemonAsString) {
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

        List<Pokemon> actualPokemons = trainer.getPokemonList();
        for (Pokemon poke : actualPokemons) {
            if (poke.getPokemonId() == pokemon.getPokemonId())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The trainer already has this Pokemon on his list");
        }

        actualPokemons.add(pokemon);
        trainer.setPokemonList(actualPokemons);
        try {
            trainer = trainerRepository.save(trainer);
            return trainerToDTO(trainer);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.I_AM_A_TEAPOT, "Something went wrong trying to add the Pokemon to the Trainer...");
        }
    }

    @Override
    public TrainerGetDTO removePokemonFromTrainer(Long id, Integer pokemonId) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(id);
        if (trainerOptional.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer with ID: " + id);
        Trainer trainer = trainerOptional.get();

        Pokemon pokemon = null;
        for (Pokemon poke:trainer.getPokemonList()) {
            if(poke.getPokemonId() == pokemonId)
                pokemon = poke;
        }
        try {
            trainer.getPokemonList().remove(pokemon);
            trainer = trainerRepository.save(trainer);
            return trainerToDTO(trainer);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The Pokemon is not on the trainer list");
        }
    }

    private List<TrainerGetDTO> trainerListToDTO(List<Trainer> trainerList) {
        List<TrainerGetDTO> trainerGetDTOList = new ArrayList<>();
        for (Trainer trainer : trainerList) {
            trainerGetDTOList.add(trainerToDTO(trainer));
        }
        return trainerGetDTOList;
    }

    private TrainerGetDTO trainerToDTO(Trainer trainer) {
        return new TrainerGetDTO(
                trainer.getId(),
                trainer.getName(),
                trainer.getBirthDate(),
                trainer.getPictureUrl(),
                trainer.getPokemonList());
    }
}
