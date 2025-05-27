package com.FZBO.payloads.requests;

import java.time.LocalDate;


public class ListingRequest {
    private String style;
    private Boolean fzboStatusActive;
    private Boolean fzboStatusComingSoon;
    private LocalDate activeDate;
    private String schoolDistrict;
    private String directionPrefix;
    private String streetSuffix;
    private String directionSuffix;
    private int listPrice;
    private String publicRemarks;
    private String ownerName;
    private String ownerPhoneNumber;
    private String occupantName;
    private String listingAgreement;
    private String assistingSeller;
    private String specialListingConditions;
    private String occupantType;
    private String streetName;
    private String unitNumber;
    private String streetNumber;
    private String state;
    private String county;
    private String city;
    private String municipality;
    private String zipCode;
    private String fullAddress;

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

    public Boolean getFzboStatusActive() {
        return fzboStatusActive;
    }

    public void setFzboStatusActive(Boolean fzboStatusActive) {
        this.fzboStatusActive = fzboStatusActive;
    }

    public LocalDate getActiveDate() {
        return activeDate;
    }

    public void setActiveDate(LocalDate activeDate) {
        this.activeDate = activeDate;
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

    public String getStreetSuffix() {
        return streetSuffix;
    }

    public void setStreetSuffix(String streetSuffix) {
        this.streetSuffix = streetSuffix;
    }

    public String getDirectionSuffix() {
        return directionSuffix;
    }

    public void setDirectionSuffix(String directionSuffix) {
        this.directionSuffix = directionSuffix;
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

    public String getListingAgreement() {
        return listingAgreement;
    }

    public void setListingAgreement(String listingAgreement) {
        this.listingAgreement = listingAgreement;
    }

    public String getOccupantName() {
        return occupantName;
    }

    public void setOccupantName(String occupantName) {
        this.occupantName = occupantName;
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

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
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

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getUnitNumber() {
        return unitNumber;
    }

    public void setUnitNumber(String unitNumber) {
        this.unitNumber = unitNumber;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getFullAddress() {
        return fullAddress;
    }

    public void setFullAddress(String fullAddress) {
        this.fullAddress = fullAddress;
    }
}
