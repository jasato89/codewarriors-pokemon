package com.ironhack.pokemon.classes;

import javax.persistence.Embeddable;

@Embeddable
public class Stat {
    private String name;
    private Integer baseStat;
    private Integer effort;

    public Stat() {
    }

    public Stat(String name, Integer baseStat, Integer effort) {
        this.name = name;
        this.baseStat = baseStat;
        this.effort = effort;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBaseStat() {
        return baseStat;
    }

    public void setBaseStat(Integer baseStat) {
        this.baseStat = baseStat;
    }

    public Integer getEffort() {
        return effort;
    }

    public void setEffort(Integer effort) {
        this.effort = effort;
    }
}
