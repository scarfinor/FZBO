package com.FZBO.repos;

import com.FZBO.models.Image;
import org.springframework.data.repository.CrudRepository;

public interface ImageRepository extends CrudRepository<Image, Integer> {
    Image findByName(String fileName);
}
