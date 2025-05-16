package com.FZBO.models;

import com.FZBO.enums.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "listings",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "address"),
        }
)
public class Listing {

    @Id
    @GeneratedValue
    private int id;

    private String address;

    private short beds;

    private Double baths;

    private EStyle style;

    private String buildDate;

    private short LivingAreaSqFt;

    private short LotSizeSqFt;

    private String schoolDistrict;

    private final Set<EAmenity> amenities = new HashSet<>();

    private EParking parking;

    private final Set<EUtil> utils = new HashSet<>();

    private int listPrice;

    private short pricePerSqFt;

    private final Set<EAppliance> appliances = new HashSet<>();

    @ManyToMany
    private Set<Image> photos = new HashSet<>();

    private Set<String> photoURLs = new HashSet<>();

    public Listing() {};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public short getBeds() {
        return beds;
    }

    public void setBeds(short beds) {
        this.beds = beds;
    }

    public Double getBaths() {
        return baths;
    }

    public void setBaths(Double baths) {
        this.baths = baths;
    }

    public EStyle getStyle() {
        return style;
    }

    public void setStyle(EStyle style) {
        this.style = style;
    }

    public String getBuildDate() {
        return buildDate;
    }

    public void setBuildDate(String buildDate) {
        this.buildDate = buildDate;
    }

    public short getLivingAreaSqFt() {
        return LivingAreaSqFt;
    }

    public void setLivingAreaSqFt(short livingAreaSqFt) {
        LivingAreaSqFt = livingAreaSqFt;
    }

    public short getLotSizeSqFt() {
        return LotSizeSqFt;
    }

    public void setLotSizeSqFt(short lotSizeSqFt) {
        LotSizeSqFt = lotSizeSqFt;
    }

    public String getSchoolDistrict() {
        return schoolDistrict;
    }

    public void setSchoolDistrict(String schoolDistrict) {
        this.schoolDistrict = schoolDistrict;
    }

    public Set<EAmenity> getAmenities() {
        return amenities;
    }

    public EParking getParking() {
        return parking;
    }

    public void setParking(EParking parking) {
        this.parking = parking;
    }

    public Set<EUtil> getUtils() {
        return utils;
    }

    public int getListPrice() {
        return listPrice;
    }

    public void setListPrice(int listPrice) {
        this.listPrice = listPrice;
    }

    public short getPricePerSqFt() {
        return pricePerSqFt;
    }

    public void setPricePerSqFt(short pricePerSqFt) {
        this.pricePerSqFt = pricePerSqFt;
    }

    public Set<EAppliance> getAppliances() {
        return appliances;
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
}