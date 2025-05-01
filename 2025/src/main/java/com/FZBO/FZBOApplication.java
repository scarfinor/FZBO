package com.FZBO;

import com.FZBO.models.ERole;
import com.FZBO.models.Role;
import com.FZBO.repos.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FZBOApplication {

	public static void main(String[] args) {
		SpringApplication.run(FZBOApplication.class, args);
	}

	@Bean
	CommandLineRunner initRoles(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.findByName(ERole.USER).isEmpty()) {
				roleRepository.save(new Role(ERole.USER));
			}
			if (roleRepository.findByName(ERole.MODERATOR).isEmpty()) {
				roleRepository.save(new Role(ERole.MODERATOR));
			}
			if (roleRepository.findByName(ERole.ADMIN).isEmpty()) {
				roleRepository.save(new Role(ERole.ADMIN));
			}
		};
	}
}
