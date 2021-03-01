package com.ironhack.pokemon.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate birthDate;
    private String pictureUrl;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "trainer_pokemon",
            joinColumns = {@JoinColumn(name = "trainer_id")},
            inverseJoinColumns = {@JoinColumn(name = "pokemon_id")}
    )
    private List<Pokemon> pokemonList;



    public Trainer() {
    }

    public Trainer(String name, LocalDate birthDate, String pictureUrl) {
        this.name = name;
        this.birthDate = birthDate;
        this.pictureUrl = pictureUrl;
    }

    public Trainer(String name, LocalDate birthDate, String pictureUrl, List<Pokemon> pokemonList) {
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
