package com.FZBO.security.jwts;

import com.FZBO.models.*;
import com.FZBO.repos.ProviderRepository;
import com.FZBO.repos.RoleRepository;
import com.FZBO.repos.UserRepository;
import com.FZBO.services.PasswordGenerationService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProviderRepository providerRepository;

    private final JWTUtils jwtUtils;
    private final PasswordGenerationService passwordGenerationService;

    @Autowired
    public OAuth2SuccessHandler(JWTUtils jwtUtils, @Lazy PasswordGenerationService passwordGenerationService) {
        this.jwtUtils = jwtUtils;
        this.passwordGenerationService = passwordGenerationService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
        OAuth2User oauth2User = oauthToken.getPrincipal();
        String registrationId = oauthToken.getAuthorizedClientRegistrationId().toLowerCase();

        String username;
        String email = oauth2User.getAttribute("email");
        String firstName;
        String lastName = null;
        EProvider provider;

        switch (registrationId) {
            case "google":
                username = oauth2User.getAttribute("sub");
                firstName = oauth2User.getAttribute("given_name");
                lastName = oauth2User.getAttribute("family_name");
                provider = EProvider.GOOGLE;
                break;

            case "github":
                username = oauth2User.getAttribute("login");
                firstName = oauth2User.getAttribute("name");
                provider = EProvider.GITHUB;
                break;

            default:
                throw new IllegalStateException("Unsupported provider: " + registrationId);
        }

        Optional<User> existingUserOpt = Optional.ofNullable(userRepository.findByEmail(email));
        User user;

        if (existingUserOpt.isPresent()) {
            user = existingUserOpt.get();
            user.setFirstLogin(false);

            providerRepository.findByName(provider).ifPresent(p -> {
                user.getProviders().add(p);
            });

            userRepository.save(user);

            String jwt = generateJwt(authentication);
            setJwtInCookies(response, jwt);
            response.sendRedirect("http://localhost:5173/SignInSuccess");
        } else {
            if (email == null) {
                email = username + "@FZBO.com";
            }

            Provider newProvider = providerRepository.findByName(provider)
                    .orElseGet(() -> providerRepository.save(new Provider(provider)));

            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            Set<Role> roles = new HashSet<>();
            roles.add(userRole);

            user = new User();
            user.setUsername(username);
            user.setEmail(email);
            user.setPassword(passwordGenerationService.generateHashedPassword());
            user.setFirstName(firstName != null ? firstName : "");
            user.setLastName(lastName != null ? lastName : "");
            user.setFirstLogin(true);
            user.getProviders().add(newProvider);
            user.setRoles(roles);
            userRepository.save(user);

            String jwt = generateJwt(authentication);
            setJwtInCookies(response, jwt);
            response.sendRedirect("http://localhost:5173/SignInSuccess");
        }
    }

    private String generateJwt(Authentication authentication) {
        return jwtUtils.generateJwtToken(authentication);
    }

    private void setJwtInCookies(HttpServletResponse response, String jwt) {
        Cookie jwtCookie = new Cookie("JWT", jwt);
        jwtCookie.setHttpOnly(true);
        jwtCookie.setSecure(true);
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(3600);
        response.addCookie(jwtCookie);
    }
}
