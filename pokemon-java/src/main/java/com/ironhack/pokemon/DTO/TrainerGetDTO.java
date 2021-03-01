package com.ironhack.pokemon.DTO;

import com.ironhack.pokemon.model.Pokemon;

import java.time.LocalDate;
import java.util.List;

public class TrainerGetDTO {
    private Long id;
    private String name;
    private LocalDate birthDate;
    private String pictureUrl;
    private List<Pokemon> pokemonList;

    public TrainerGetDTO() {
    }

    public TrainerGetDTO(Long id, String name, LocalDate birthDate, String pictureUrl, List<Pokemon> pokemonList) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.pictureUrl = pictureUrl;
        this.pokemonList = pokemonList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public List<Pokemon> getPokemonList() {
        return pokemonList;
    }

    public void setPokemonList(List<Pokemon> pokemonList) {
        this.pokemonList = pokemonList;
    }
}
