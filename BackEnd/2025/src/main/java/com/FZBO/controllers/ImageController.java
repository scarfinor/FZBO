package com.FZBO.controllers;

import com.FZBO.models.Image;
import com.FZBO.models.User;
import com.FZBO.repos.ImageRepository;
import com.FZBO.repos.UserRepository;
import com.FZBO.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequestMapping("/api/images")
@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/uploadImage")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        int uploadImage = imageService.uploadImageToFileDirectory(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("/downloadImage/{fileName}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName) throws IOException {
        byte[] imageData=imageService.downloadImageFromFileSystem(fileName);
        String fileType = imageService.getFileExtension(imageRepository.findByName(fileName));
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf(fileType))
                .body(imageData);

    }

    @GetMapping("/downloadUserImage/{username}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> downloadUserImage(@PathVariable String username) throws IOException {
        User user = userRepository.findByUsername(username);
        if(user!=null){

            Image userImage = user.getUserImage();
            byte[] imageData=imageService.downloadImageFromFileSystem(userImage.getName());
            String fileType = imageService.getFileExtension(userImage);
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.valueOf(fileType))
                    .body(imageData);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("no image");

    }
}