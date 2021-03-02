package com.ironhack.pokemon.DTO;

import java.time.LocalDate;

public class TrainerPostDTO {
    private String name;
    private LocalDate birthDate;
    private String pictureUrl;
    private String hobby;

    public TrainerPostDTO() {
    }

    public TrainerPostDTO(String name, LocalDate birthDate, String pictureUrl, String hobby) {
        this.name = name;
        this.birthDate = birthDate;
        this.pictureUrl = pictureUrl;
        this.hobby = hobby;
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

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
