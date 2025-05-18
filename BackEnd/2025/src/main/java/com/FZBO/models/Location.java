package com.FZBO.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;


@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Street address must not be blank")
    private String streetAddress;

    @NotBlank(message = "State must not be blank")
    private String state;

    @NotBlank(message = "County must not be blank")
    private String county;

    @NotBlank(message = "City must not be blank")
    private String city;

    @NotBlank(message = "municipality must not be blank")
    private String municipality;

    @NotBlank(message = "Zip Code must not be blank")
    private int zipCode;
}
