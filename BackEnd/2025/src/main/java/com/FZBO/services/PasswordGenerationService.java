package com.FZBO.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Component
@Service
public class PasswordGenerationService {

    private static final int DEFAULT_PASSWORD_LENGTH = 12;

    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL_CHARACTERS = "!@#$%^&*()-_+=<>?";

    private static final String ALL_CHARACTERS = LOWERCASE + UPPERCASE + DIGITS + SPECIAL_CHARACTERS;

    private final SecureRandom random;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public PasswordGenerationService(PasswordEncoder passwordEncoder) {
        this.random = new SecureRandom();
        this.passwordEncoder = passwordEncoder;
    }

    public String generateRawPassword() {
        return generateRawPassword(DEFAULT_PASSWORD_LENGTH);
    }

    public String generateRawPassword(int length) {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < length; i++) {
            password.append(ALL_CHARACTERS.charAt(random.nextInt(ALL_CHARACTERS.length())));
        }
        return password.toString();
    }

    public String generateHashedPassword() {
        String rawPassword = generateRawPassword();
        return passwordEncoder.encode(rawPassword);
    }

    public String generateHashedPassword(int length) {
        String rawPassword = generateRawPassword(length);
        return passwordEncoder.encode(rawPassword);
    }
}