package com.FZBO.models;

import jakarta.persistence.*;

@Entity
@Table(name = "images")
public class Image{

    @Id
    @GeneratedValue
    private int id;

    private String name;

    private String type;

    private String filePath;

    @OneToOne
    private User user;

    public Image() {
    }

    public Image(String name, String type, String filePath){

        this.name = name;
        this.type = type;
        this.filePath = filePath;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}