package com.FZBO;

import com.FZBO.enums.EProvider;
import com.FZBO.enums.ERole;
import com.FZBO.models.Provider;
import com.FZBO.models.Role;
import com.FZBO.repos.ProviderRepository;
import com.FZBO.repos.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class FZBOApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		System.setProperty("GOOGLE_CLIENT_ID", dotenv.get("GOOGLE_CLIENT_ID"));
		System.setProperty("GOOGLE_CLIENT_SECRET", dotenv.get("GOOGLE_CLIENT_SECRET"));
		System.setProperty("GITHUB_CLIENT_ID", dotenv.get("GITHUB_CLIENT_ID"));
		System.setProperty("GITHUB_CLIENT_SECRET", dotenv.get("GIT_CLIENT_SECRET"));
		System.setProperty("JWT_SECRET_KEY", dotenv.get("JWT_SECRET_KEY"));
		SpringApplication.run(FZBOApplication.class, args);
	}

	@Bean
	CommandLineRunner initRoles(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.findByName(ERole.ROLE_USER).isEmpty()) {
				roleRepository.save(new Role(ERole.ROLE_USER));
			}
			if (roleRepository.findByName(ERole.ROLE_MODERATOR).isEmpty()) {
				roleRepository.save(new Role(ERole.ROLE_MODERATOR));
			}
			if (roleRepository.findByName(ERole.ROLE_ADMIN).isEmpty()) {
				roleRepository.save(new Role(ERole.ROLE_ADMIN));
			}
			if (roleRepository.findByName(ERole.ROLE_BUYER).isEmpty()) {
				roleRepository.save(new Role(ERole.ROLE_BUYER));
			}
			if (roleRepository.findByName(ERole.ROLE_SELLER).isEmpty()) {
				roleRepository.save(new Role(ERole.ROLE_SELLER));
			}
		};
	}

	@Bean
	CommandLineRunner initProviders(ProviderRepository providerRepository){
		return args -> {
			if (providerRepository.findByName(EProvider.GITHUB).isEmpty()) {
				providerRepository.save(new Provider(EProvider.GITHUB));
			}
			if (providerRepository.findByName(EProvider.GOOGLE).isEmpty()) {
				providerRepository.save(new Provider(EProvider.GOOGLE));
			}
			if (providerRepository.findByName(EProvider.FZBO).isEmpty()) {
				providerRepository.save(new Provider(EProvider.FZBO));
			}
		};
	}
}
