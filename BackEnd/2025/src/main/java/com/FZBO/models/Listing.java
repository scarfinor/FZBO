package com.FZBO.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    private Boolean fzboStatusActive;

    private Boolean fzboStatusComingSoon;

    private LocalDate activeDate;

    @NotBlank(message = "School District must not be blank")
    private String schoolDistrict;

    private String directionPrefix;

    private String streetSuffix;

    private String directionSuffix;

    @NotNull(message = "List Price must not be null")
    private int listPrice;

    @Size(min = 10, max = 1500, message = "Public Remarks must be at least 10 and no more than 1500 characters long")
    private String publicRemarks;

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

    private String unitNumber;

    @NotBlank(message = "Street number must not be blank")
    private String streetNumber;

    @NotBlank(message = "State must not be blank")
    private String state;

    @NotBlank(message = "County must not be blank")
    private String county;

    @NotBlank(message = "City must not be blank")
    private String city;

    @NotBlank(message = "municipality must not be blank")
    private String municipality;

    @NotBlank(message = "Zip Code must not be blank")
    private String zipCode;

    private String fullAddress;

    public Listing() {};

    public Listing(String style, Boolean fzboStatusActive, Boolean fzboStatusComingSoon, LocalDate activeDate, String schoolDistrict, String directionPrefix, String streetSuffix, String directionSuffix, int listPrice, String publicRemarks, String ownerName, String ownerPhoneNumber, String occupantName, String listingAgreement, String assistingSeller, String specialListingConditions, String occupantType, String streetName, String unitNumber, String streetNumber, String state, String county, String city, String municipality, String zipCode, String fullAddress) {
        this.style = style;
        this.fzboStatusActive = fzboStatusActive;
        this.fzboStatusComingSoon = fzboStatusComingSoon;
        this.activeDate = activeDate;
        this.schoolDistrict = schoolDistrict;
        this.directionPrefix = directionPrefix;
        this.streetSuffix = streetSuffix;
        this.directionSuffix = directionSuffix;
        this.listPrice = listPrice;
        this.publicRemarks = publicRemarks;
        this.ownerName = ownerName;
        this.ownerPhoneNumber = ownerPhoneNumber;
        this.occupantName = occupantName;
        this.listingAgreement = listingAgreement;
        this.assistingSeller = assistingSeller;
        this.specialListingConditions = specialListingConditions;
        this.occupantType = occupantType;
        this.streetName = streetName;
        this.unitNumber = unitNumber;
        this.streetNumber = streetNumber;
        this.state = state;
        this.county = county;
        this.city = city;
        this.municipality = municipality;
        this.zipCode = zipCode;
        this.fullAddress = fullAddress;
    }

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

    public Boolean getFzboStatusComingSoon() {
        return fzboStatusComingSoon;
    }

    public void setFzboStatusComingSoon(Boolean fzboStatusComingSoon) {
        this.fzboStatusComingSoon = fzboStatusComingSoon;
    }

    public LocalDate getActiveDate() {
        return activeDate;
    }

    public void setActiveDate(LocalDate activeDate) {
        this.activeDate = activeDate;
    }

    public Boolean getFzboStatusActive() {
        return fzboStatusActive;
    }

    public void setFzboStatusActive(Boolean fzboStatusActive) {
        this.fzboStatusActive = fzboStatusActive;
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

    public String getPublicRemarks() {
        return publicRemarks;
    }

    public void setPublicRemarks(String publicRemarks) {
        this.publicRemarks = publicRemarks;
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

    public String getUnitNumber() {
        return unitNumber;
    }

    public void setUnitNumber(String unitNumber) {
        this.unitNumber = unitNumber;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(String streetNumber) {
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

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getFullAddress() {
        return fullAddress;
    }

    public void setFullAddress(String fullAddress) {
        this.fullAddress = fullAddress;
    }
}