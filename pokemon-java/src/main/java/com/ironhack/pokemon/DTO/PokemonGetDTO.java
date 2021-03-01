package com.ironhack.pokemon.DTO;

import com.ironhack.pokemon.classes.Ability;
import com.ironhack.pokemon.classes.Move;
import com.ironhack.pokemon.classes.Stat;

import javax.persistence.Embedded;
import java.util.List;

public class PokemonGetDTO {
    private Integer id;
    private String name;
    private Double height;
    private Double weight;
    private Double baseExperience;
    @Embedded
    private List<Ability> abilities;
    private String speciesName;
    private String pictureFrontHq;
    private String pictureFront;
    private String pictureBack;
    private Integer heldItemsQty;
    @Embedded
    private List<Stat> stats;
    private List<String> types;
    @Embedded
    private List<Move> moves;

    public PokemonGetDTO() {
    }

    public PokemonGetDTO(Integer id, String name, Double height, Double weight, Double baseExperience, List<Ability> abilities, String speciesName, String pictureFrontHq, String pictureFront, String pictureBack, Integer heldItemsQty, List<Stat> stats, List<String> types, List<Move> moves) {
        this.id = id;
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
        this.moves = moves;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public List<Ability> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<Ability> abilities) {
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

    public List<Stat> getStats() {
        return stats;
    }

    public void setStats(List<Stat> stats) {
        this.stats = stats;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }

    public List<Move> getMoves() {
        return moves;
    }

    public void setMoves(List<Move> moves) {
        this.moves = moves;
    }
}
