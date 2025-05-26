package com.FZBO.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "listings",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "location"),
        }
)
public class Listing {

    @Id
    @GeneratedValue
    private int id;

    @NotBlank(message = "Style must not be blank")
    private String style;

    private Boolean statusActive;

    private Boolean statusComingSoon;

    private LocalDate expectedActive;

    @NotBlank(message = "School District must not be blank")
    private String schoolDistrict;

    private String directionPrefix;

    private String streetSuffix;

    private String directionSuffix;

    @NotBlank(message = "List Price must not be blank")
    private int listPrice;

    @Size(min = 10, max = 1500, message = "Remarks must be at least 10 and no more than 1500 characters long")
    private String remarks;

    private String ownerName;

    private String ownerPhoneNumber;

    private String occupantName;

    @NotBlank(message = "Listing Agreement must not be blank")
    private String listingAgreement;

    @NotBlank(message = "Assisting Seller must not be blank")
    private String assistingSeller;

    @NotBlank(message = "Special Listing Conditions must not be blank")
    private String specialListingConditions;

    private String occupantType;

    @ManyToMany
    private Set<Image> photos = new HashSet<>();

    private Set<String> photoURLs = new HashSet<>();

    @NotBlank(message = "Street name must not be blank")
    private String streetName;

    private int unitNumber;

    @NotBlank(message = "Street number must not be blank")
    private int streetNumber;

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

    public Listing() {};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public Boolean getStatusActive() {
        return statusActive;
    }

    public void setStatusActive(Boolean statusActive) {
        this.statusActive = statusActive;
    }

    public Boolean getStatusComingSoon() {
        return statusComingSoon;
    }

    public void setStatusComingSoon(Boolean statusComingSoon) {
        this.statusComingSoon = statusComingSoon;
    }

    public LocalDate getExpectedActive() {
        return expectedActive;
    }

    public void setExpectedActive(LocalDate expectedActive) {
        this.expectedActive = expectedActive;
    }

    public String getSchoolDistrict() {
        return schoolDistrict;
    }

    public void setSchoolDistrict(String schoolDistrict) {
        this.schoolDistrict = schoolDistrict;
    }

    public String getDirectionPrefix() {
        return directionPrefix;
    }

    public void setDirectionPrefix(String directionPrefix) {
        this.directionPrefix = directionPrefix;
    }

    public String getDirectionSuffix() {
        return directionSuffix;
    }

    public void setDirectionSuffix(String directionSuffix) {
        this.directionSuffix = directionSuffix;
    }

    public String getStreetSuffix() {
        return streetSuffix;
    }

    public void setStreetSuffix(String streetSuffix) {
        this.streetSuffix = streetSuffix;
    }

    public int getListPrice() {
        return listPrice;
    }

    public void setListPrice(int listPrice) {
        this.listPrice = listPrice;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwnerPhoneNumber() {
        return ownerPhoneNumber;
    }

    public void setOwnerPhoneNumber(String ownerPhoneNumber) {
        this.ownerPhoneNumber = ownerPhoneNumber;
    }

    public String getOccupantName() {
        return occupantName;
    }

    public void setOccupantName(String occupantName) {
        this.occupantName = occupantName;
    }

    public String getListingAgreement() {
        return listingAgreement;
    }

    public void setListingAgreement(String listingAgreement) {
        this.listingAgreement = listingAgreement;
    }

    public String getAssistingSeller() {
        return assistingSeller;
    }

    public void setAssistingSeller(String assistingSeller) {
        this.assistingSeller = assistingSeller;
    }

    public String getSpecialListingConditions() {
        return specialListingConditions;
    }

    public void setSpecialListingConditions(String specialListingConditions) {
        this.specialListingConditions = specialListingConditions;
    }

    public String getOccupantType() {
        return occupantType;
    }

    public void setOccupantType(String occupantType) {
        this.occupantType = occupantType;
    }

    public Set<Image> getPhotos() {
        return photos;
    }

    public void setPhotos(Set<Image> photos) {
        this.photos = photos;
    }

    public Set<String> getPhotoURLs() {
        return photoURLs;
    }

    public void setPhotoURLs(Set<String> photoURLs) {
        this.photoURLs = photoURLs;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public int getUnitNumber() {
        return unitNumber;
    }

    public void setUnitNumber(int unitNumber) {
        this.unitNumber = unitNumber;
    }

    public int getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(int streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
}