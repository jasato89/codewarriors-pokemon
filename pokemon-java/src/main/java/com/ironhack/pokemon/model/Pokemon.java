package com.ironhack.pokemon.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pokemon {
    @Id
    private Integer id;
    private String name;
    private Double height;
    private Double weight;
    private Double baseExperience;
    //Guardamos el objeto de abilities como un string y luego con GSON lo transformamos a una lista
    private String abilities;
    private String speciesName;
    private String pictureFrontHq;
    private String pictureFront;
    private String pictureBack;
    private Integer heldItemsQty;
    //Guardamos el objeto de stats como un string y luego con GSON lo transformamos a una lista
    private String stats;
    //Guardamos el objeto de types como un string y luego con GSON lo transformamos a una lista
    private String types;
    //Guardamos el objeto de moves como un string y luego con GSON lo transformamos a una lista
    private String moves;


    public Pokemon() {
    }

    public Pokemon(Integer id, String name, Double height, Double weight, Double baseExperience, String abilities, String speciesName, String pictureFrontHq, String pictureFront, String pictureBack, Integer heldItemsQty, String stats, String types, String moves) {
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

    public String getMoves() {
        return moves;
    }

    public void setMoves(String moves) {
        this.moves = moves;
    }
}
