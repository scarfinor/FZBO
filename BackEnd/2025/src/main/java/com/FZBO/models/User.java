package com.FZBO.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(
        name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        }
)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Username must not be blank")
    @NotNull(message = "Username must not be null")
    @Size(max = 50, message = "Username must be less than 51 characters")
    private String username;

    @Size(max = 30, message = "First name must be less than 31 characters")
    private String firstName;

    @Size(max = 30, message = "Last name must be less than 31 characters")
    private String lastName;

    @NotBlank(message = "Email must not be blank")
    @NotNull(message = "Email must not be null")
    @Size(max = 50, message = "Email must be less than 51 characters")
    @Email(message = "Email must be strongly formed")
    private String email;

    @Size(max = 50, message = "City must be less than 51 characters")
    private String city;

    @Size(max = 1000, message = "Bio must be less than 1001 characters")
    private String bio;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<SocialMedia> socials;

    @NotBlank(message = "Password must not be blank")
    @NotNull(message = "Password must not be null")
    @Size(min = 5, max = 120, message = "Password must be more than 4 characters and less than 121 characters")
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    @Column(nullable = false)
    private boolean firstLogin = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_providers",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "provider_id")
    )
    private Set<Provider> providers = new HashSet<>();

    @Column(nullable = false)
    private Boolean acceptTerms = false;

    @Column(nullable = false)
    private Boolean acceptPrivacyPolicy = false;

    @OneToOne
    private Image userImage;

    private String userImageURL;

    public User() {
    }

    public User(String username, String firstName, String lastName, String email, String password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public List<SocialMedia> getSocials() {
        return socials;
    }

    public void setSocials(List<SocialMedia> socials) {
        this.socials = socials;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public boolean isFirstLogin() {
        return firstLogin;
    }

    public void setFirstLogin(boolean firstLogin) {
        this.firstLogin = firstLogin;
    }

    public Set<Provider> getProviders() {
        return providers;
    }

    public void setProviders(Set<Provider> providers) {
        this.providers = providers;
    }

    public Boolean getAcceptTerms() {
        return acceptTerms;
    }

    public void setAcceptTerms(Boolean acceptTerms) {
        this.acceptTerms = acceptTerms;
    }

    public Boolean getAcceptPrivacyPolicy() {
        return acceptPrivacyPolicy;
    }

    public void setAcceptPrivacyPolicy(Boolean acceptPrivacyPolicy) {
        this.acceptPrivacyPolicy = acceptPrivacyPolicy;
    }

    public Image getUserImage() {
        return userImage;
    }

    public void setUserImage(Image userImage) {
        this.userImage = userImage;
    }

    public String getUserImageURL() {
        return userImageURL;
    }

    public void setUserImageURL(String userImageURL) {
        this.userImageURL = userImageURL;
    }
}