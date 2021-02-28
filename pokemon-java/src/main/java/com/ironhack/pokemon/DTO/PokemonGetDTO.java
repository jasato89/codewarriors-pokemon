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
    //Guardamos el objeto de abilities como un string y luego con GSON lo transformamos a una lista
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
}
