package com.FZBO.repos;

import com.FZBO.models.Listing;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListingRepository extends CrudRepository<Listing, Integer> {
    Boolean existsByFullAddress(String fullAddress);
    Listing findByFullAddress(String fullAddress);
}
