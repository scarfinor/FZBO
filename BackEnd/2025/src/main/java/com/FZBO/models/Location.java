package com.FZBO.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;


@Entity
@Table(name = "locations")
public class Location {

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
    private short zipCode;
}
