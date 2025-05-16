package com.FZBO.models;

import com.FZBO.enums.EProvider;
import jakarta.persistence.*;

@Entity
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
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