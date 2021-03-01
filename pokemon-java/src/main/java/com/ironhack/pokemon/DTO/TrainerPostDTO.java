package com.ironhack.pokemon.DTO;

import java.time.LocalDate;

public class TrainerPostDTO {
    private String name;
    private LocalDate birthDate;
    private String pictureUrl;

    public TrainerPostDTO() {
    }

    public TrainerPostDTO(String name, LocalDate birthDate, String pictureUrl) {
        this.name = name;
        this.birthDate = birthDate;
        this.pictureUrl = pictureUrl;
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
}
