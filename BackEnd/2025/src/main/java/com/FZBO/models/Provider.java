package com.FZBO.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    @NotNull(message = "Provider must not be null")
    @NotBlank(message = "Provider must not be blank")
    private EProvider name;

    public Provider() {}

    public Provider(EProvider name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public EProvider getName() {
        return name;
    }

    public void setName(EProvider name) {
        this.name = name;
    }
}