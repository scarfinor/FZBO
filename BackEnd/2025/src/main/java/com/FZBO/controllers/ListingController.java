package com.FZBO.controllers;

import com.FZBO.models.Listing;
import com.FZBO.payloads.requests.ListingRequest;
import com.FZBO.payloads.responses.ListingResponse;
import com.FZBO.payloads.responses.MessageResponse;
import com.FZBO.repos.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.FZBO.payloads.responses.ListingResponse.getListingResponse;

@RestController
@RequestMapping("/api/listings")
public class  ListingController {
        @Autowired
        private ListingRepository listingRepository;

    @PostMapping("/submitListing")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN') or hasRole('BUYER') or hasRole('SELLER')")
    public ResponseEntity<?> submitListing(Authentication authentication, @RequestBody ListingRequest listingRequest) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>("User is not authenticated", HttpStatus.UNAUTHORIZED);
        }

        String username = authentication.getName();
        System.out.println("Submitting listing for: " + username);
        System.out.println("Listing request: " + listingRequest);
        String fullAddress = listingRequest.getStreetNumber() + " "
                + listingRequest.getStreetName() + " "
                + listingRequest.getCity() + " "
                + listingRequest.getState() + " "
                + listingRequest.getZipCode() + " "
                + listingRequest.getCounty();
        listingRequest.setFullAddress(fullAddress);

        if (listingRepository.existsByFullAddress(listingRequest.getFullAddress())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Full Address is already listed!"));
        }
        Listing listing = new Listing(listingRequest.getStyle(),
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
        listingRepository.save(listing);
        ListingResponse listingResponse = getListingResponse(listing);
        return ResponseEntity.ok(listingResponse);
}

    @GetMapping("/allListings")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN') or hasRole('BUYER') or hasRole('SELLER')")
    ResponseEntity<?>allListings(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>("User is not authenticated", HttpStatus.UNAUTHORIZED);
        }
        List<Listing> listings = (List<Listing>) listingRepository.findAll();
            if (listings.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
         return ResponseEntity.ok(listings);
    }
}

