package com.ironhack.pokemon.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer pokemonId;
    private String name;
    private Double height;
    private Double weight;
    private Double baseExperience;
    //Guardamos el objeto de abilities como un string y luego con GSON lo transformamos a una lista
    @Column( length = 100000 )
    private String abilities;
    private String speciesName;
    private String pictureFrontHq;
    private String pictureFront;
    private String pictureBack;
    private Integer heldItemsQty;
    //Guardamos el objeto de stats como un string y luego con GSON lo transformamos a una lista
    @Column( length = 100000 )
    private String stats;
    //Guardamos el objeto de types como un string y luego con GSON lo transformamos a una lista
    @Column( length = 100000 )
    private String types;

    @ManyToMany(mappedBy = "")
    private List<Trainer> trainerList;

    public Pokemon() {
    }

    //Full constructor
    public Pokemon(Integer pokemonId, String name, Double height, Double weight, Double baseExperience, String abilities, String speciesName, String pictureFrontHq, String pictureFront, String pictureBack, Integer heldItemsQty, String stats, String types) {
        this.pokemonId = pokemonId;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.baseExperience = baseExperience;
        this.abilities = abilities;
        this.speciesName = speciesName;
        this.pictureFrontHq = pictureFrontHq;
        this.pictureFront = pictureFront;
        this.pictureBack = pictureBack;
        this.heldItemsQty = heldItemsQty;
        this.stats = stats;
        this.types = types;
    }

    //Constructor without HQ image and without TrainerList
    public Pokemon(Integer pokemonId, String name, Double height, Double weight, Double baseExperience, String abilities, String speciesName, String pictureFront, String pictureBack, Integer heldItemsQty, String stats, String types) {
        this.pokemonId = pokemonId;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.baseExperience = baseExperience;
        this.abilities = abilities;
        this.speciesName = speciesName;
        this.pictureFront = pictureFront;
        this.pictureBack = pictureBack;
        this.heldItemsQty = heldItemsQty;
        this.stats = stats;
        this.types = types;
    }

    //Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPokemonId() {
        return pokemonId;
    }

    public void setPokemonId(Integer pokemonId) {
        this.pokemonId = pokemonId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getBaseExperience() {
        return baseExperience;
    }

    public void setBaseExperience(Double baseExperience) {
        this.baseExperience = baseExperience;
    }

    public String getAbilities() {
        return abilities;
    }

    public void setAbilities(String abilities) {
        this.abilities = abilities;
    }

    public String getSpeciesName() {
        return speciesName;
    }

    public void setSpeciesName(String speciesName) {
        this.speciesName = speciesName;
    }

    public String getPictureFrontHq() {
        return pictureFrontHq;
    }

    public void setPictureFrontHq(String pictureFrontHq) {
        this.pictureFrontHq = pictureFrontHq;
    }

    public String getPictureFront() {
        return pictureFront;
    }

    public void setPictureFront(String pictureFront) {
        this.pictureFront = pictureFront;
    }

    public String getPictureBack() {
        return pictureBack;
    }

    public void setPictureBack(String pictureBack) {
        this.pictureBack = pictureBack;
    }

    public Integer getHeldItemsQty() {
        return heldItemsQty;
    }

    public void setHeldItemsQty(Integer heldItemsQty) {
        this.heldItemsQty = heldItemsQty;
    }

    public String getStats() {
        return stats;
    }

    public void setStats(String stats) {
        this.stats = stats;
    }

    public String getTypes() {
        return types;
    }

    public void setTypes(String types) {
        this.types = types;
    }

    public List<Trainer> getTrainerList() {
        return trainerList;
    }

    public void setTrainerList(List<Trainer> trainerList) {
        this.trainerList = trainerList;
    }
}
