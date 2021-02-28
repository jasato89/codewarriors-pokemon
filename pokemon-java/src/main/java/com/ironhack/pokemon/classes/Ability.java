package com.ironhack.pokemon.classes;

import javax.persistence.Embeddable;

@Embeddable
public class Ability {
    private String name;
    private String url;
    private boolean isHidden;

    public Ability() {
    }

    public Ability(String name, String url, boolean isHidden) {
        this.name = name;
        this.url = url;
        this.isHidden = isHidden;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public boolean isHidden() {
        return isHidden;
    }

    public void setHidden(boolean hidden) {
        isHidden = hidden;
    }
}
