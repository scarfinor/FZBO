package com.FZBO.services;

import com.FZBO.models.Image;
import com.FZBO.repos.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Objects;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    // Save to "uploads" folder
    private final String FOLDER_PATH = System.getProperty("user.dir") + File.separator + "uploads" + File.separator;

    private void checkUploadDirExists() {
        File directory = new File(FOLDER_PATH);
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }

    public int uploadImageToFileDirectory(MultipartFile file) throws IOException {
        checkUploadDirExists();

        String filePath = FOLDER_PATH + file.getOriginalFilename();
        Image imageData = imageRepository.save(
                new Image(file.getOriginalFilename(), file.getContentType(), filePath)
        );

        file.transferTo(new File(filePath));
        return imageData.getId();
    }

    public int uploadImageToFileDirectory(MultipartFile file, String username) throws IOException {
        checkUploadDirExists();

        String fileType = Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf("."));
        String fileName = username + fileType;
        String filePath = FOLDER_PATH + fileName;

        Image imageData = imageRepository.save(
                new Image(fileName, file.getContentType(), filePath)
        );

        file.transferTo(new File(filePath));
        return imageData.getId();
    }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<Image> dbImageData = Optional.ofNullable(imageRepository.findByName(fileName));
        String filePath = dbImageData.get().getFilePath();
        return Files.readAllBytes(new File(filePath).toPath());
    }

    public String getFileExtension(Image image) {
        return image != null ? image.getType() : null;
    }
}