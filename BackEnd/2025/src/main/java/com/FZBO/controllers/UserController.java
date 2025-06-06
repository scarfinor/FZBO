package com.FZBO.controllers;

import com.FZBO.models.User;
import com.FZBO.repos.UserRepository;
import com.FZBO.security.jwts.JWTUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTUtils jwtUtils;

    @GetMapping("/logout")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> logoutUser(HttpServletResponse response, HttpServletRequest request ,Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>("User is not authenticated", HttpStatus.UNAUTHORIZED);
        }

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        SecurityContextHolder.clearContext();
        jwtUtils.clearJsessionIdCookie(response);
        jwtUtils.clearTokenJwtCookie(response);
        return new ResponseEntity<>("Logged out successfully.", HttpStatus.OK);

    }

    @DeleteMapping("/deleteAccount")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> deleteAccount(HttpServletResponse response, HttpServletRequest request, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return new ResponseEntity<>("User is not authenticated", HttpStatus.UNAUTHORIZED);
        }

        String username = authentication.getName();
        System.out.println("Deleting account for username: " + username);

        Optional<User> userOpt = Optional.ofNullable(userRepository.findByUsername(username));
        if (userOpt.isEmpty()) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        userRepository.delete(userOpt.get());
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        SecurityContextHolder.clearContext();
        jwtUtils.clearJsessionIdCookie(response);
        jwtUtils.clearTokenJwtCookie(response);
        return new ResponseEntity<>("User account deleted successfully and logged out.", HttpStatus.OK);
    }
}