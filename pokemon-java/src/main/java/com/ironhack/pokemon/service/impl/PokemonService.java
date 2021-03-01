package com.ironhack.pokemon.service.impl;

import com.ironhack.pokemon.model.Pokemon;
import com.ironhack.pokemon.repository.PokemonRepository;
import com.ironhack.pokemon.service.interfaces.IPokemonService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService implements IPokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;


    @Override
    public Pokemon savePokemon(String pokemonAsString) {
        Pokemon pokemon = stringToPokemon(pokemonAsString);
        return pokemonRepository.save(pokemon);
    }

    private Pokemon stringToPokemon(String pokemonAsString) {
        JSONObject jsonData = new JSONObject(pokemonAsString);
        System.out.println(pokemonAsString);
        System.out.println(jsonData);
        Pokemon pokemon = new Pokemon(
                jsonData.getInt("id"),
                jsonData.getString("name"),
                jsonData.getDouble("height"),
                jsonData.getDouble("weight"),
                jsonData.getDouble("base_experience"),
                jsonData.getJSONArray("abilities").toString(),
                jsonData.getJSONObject("species").getString("name"),
                jsonData.getJSONObject("sprites").getString("front_default"),
                jsonData.getJSONObject("sprites").getString("back_default"),
                jsonData.getJSONArray("held_items").length(),
                jsonData.getJSONArray("stats").toString(),
                jsonData.getJSONArray("types").toString()
                );


        String pictureHq;
        try {
            pictureHq = jsonData.getJSONObject("sprites").getJSONObject("dream_world").getString("front_default");
        }catch (Exception e){
            pictureHq = "";
        }
        if(!pictureHq.equals(""))
            pokemon.setPictureFrontHq(pictureHq);

        return pokemonRepository.save(pokemon);
    }
}
