package com.FZBO.repos;

import com.FZBO.models.EProvider;
import com.FZBO.models.Provider;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProviderRepository extends CrudRepository<Provider, Integer> {
    Optional<Provider> findByNameOpt(EProvider name);

    Provider findByName(EProvider name);
}
