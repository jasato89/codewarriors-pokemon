package com.ironhack.pokemon.DTO;

import com.ironhack.pokemon.model.Pokemon;
import com.ironhack.pokemon.model.Trainer;

public class TeamPostDTO {
    private Trainer trainer;
    private Pokemon pokemon;

    public TeamPostDTO() {
    }

    public TeamPostDTO(Trainer trainer, Pokemon pokemon) {
        this.trainer = trainer;
        this.pokemon = pokemon;
    }

    public Trainer getTrainer() {
        return trainer;
    }

    public void setTrainer(Trainer trainer) {
        this.trainer = trainer;
    }

    public Pokemon getPokemon() {
        return pokemon;
    }

    public void setPokemon(Pokemon pokemon) {
        this.pokemon = pokemon;
    }
}
