package com.FZBO.payloads.responses;

import com.FZBO.models.Listing;

public class ListingResponse {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static ListingResponse getListingResponse(Listing listingRequest) {
        Listing listing = new Listing(
                listingRequest.getStyle(),
                listingRequest.getFzboStatusActive(),
                listingRequest.getFzboStatusComingSoon(),
                listingRequest.getActiveDate(),
                listingRequest.getSchoolDistrict(),
                listingRequest.getDirectionPrefix(),
                listingRequest.getStreetSuffix(),
                listingRequest.getDirectionSuffix(),
                listingRequest.getListPrice(),
                listingRequest.getPublicRemarks(),
                listingRequest.getOwnerName(),
                listingRequest.getOwnerPhoneNumber(),
                listingRequest.getOccupantName(),
                listingRequest.getListingAgreement(),
                listingRequest.getSpecialListingConditions(),
                listingRequest.getAssistingSeller(),
                listingRequest.getOccupantType(),
                listingRequest.getStreetName(),
                listingRequest.getStreetNumber(),
                listingRequest.getUnitNumber(),
                listingRequest.getState(),
                listingRequest.getCounty(),
                listingRequest.getCity(),
                listingRequest.getMunicipality(),
                listingRequest.getZipCode(),
                listingRequest.getFullAddress());

        ListingResponse listingResponse = new ListingResponse();
        listingResponse.setMessage(listing.getFullAddress() + " Has been successfully listed on FZBO!");
        return listingResponse;
    }
}
