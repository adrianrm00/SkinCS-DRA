package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Description is mandatory")
    private String description;

    @NotBlank(message = "Weapon is mandatory")
    private String weapon;

    @NotBlank(message = "Rarity is mandatory")
    private String rarity;

    @NotBlank(message = "Image is mandatory")
    private String image;

    public Inventory() {

    }

    public Inventory(String name, String description, String weapon, String rarity, String image) {
        this.name = name;
        this.description = description;
        this.weapon = weapon;
        this.rarity = rarity;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id; 
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name; 
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description; 
    }

    public String getWeapon() {
        return weapon;
    }

    public void setWeapon(String weapon) {
        this.weapon = weapon; 
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity; 
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image; 
    }

    @Override
    public String toString() {
        return "Inventory [id=" + id + ", name=" + name + ", description=" + description + ", weapon=" + weapon + ", rarity=" + rarity + ", image=" + image + "]";
    }
    
}
