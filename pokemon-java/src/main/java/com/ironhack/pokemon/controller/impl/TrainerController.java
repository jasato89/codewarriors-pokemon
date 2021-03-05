package com.ironhack.pokemon.controller.impl;

import com.ironhack.pokemon.DTO.TrainerGetDTO;
import com.ironhack.pokemon.DTO.TrainerPostDTO;
import com.ironhack.pokemon.controller.interfaces.ITrainerController;
import com.ironhack.pokemon.service.interfaces.ITrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;

@RestController
public class TrainerController implements ITrainerController {
    @Autowired
    private ITrainerService trainerService;

    @Override
    @GetMapping("/trainers")
    @CrossOrigin
    public List<TrainerGetDTO> getAllTrainers() {
        return trainerService.getAllTrainers();
    }

    @Override
    @GetMapping("/trainer/{id}")
    @CrossOrigin
    public TrainerGetDTO getTrainerById(@PathVariable Long id) {
        return trainerService.getTrainerById(id);
    }

    @Override
    @GetMapping("/trainer/name/{name}")
    @CrossOrigin
    public TrainerGetDTO getTrainerByName(@PathVariable String name) {
        return trainerService.getTrainerByName(name);
    }

    @Override
    @PostMapping("/trainer")
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin
    public TrainerGetDTO createTrainer(@RequestBody @Valid TrainerPostDTO trainerPostDTO) {
        return trainerService.createTrainer(trainerPostDTO);
    }

    @Override
    @DeleteMapping("/trainer/{id}")
    @CrossOrigin
    public String deleteTrainerById(@PathVariable Long id) {
        return trainerService.deleteTrainerById(id);
    }


    //Add a Pokemon to a trainer
    //'pokemonAsString is the JSON returned by the endpoint https://pokeapi.co/api/v2/pokemon/{id}
    @Override
    @PutMapping("/trainer/{id}/add-pokemon")
    @CrossOrigin
    public TrainerGetDTO addPokemonToTrainer(@PathVariable Long id, @RequestBody String pokemonAsString){
        return trainerService.addPokemonToTrainer(id, pokemonAsString);
    }

    @Override
    @PutMapping("/trainer/{id}/remove-pokemon/{pokemon-id}")
    @CrossOrigin
    public TrainerGetDTO removePokemonFromTrainer(@PathVariable(name = "id") Long id, @PathVariable(name = "pokemon-id") Integer pokemonId){
        return trainerService.removePokemonFromTrainer(id, pokemonId);
    }


}
