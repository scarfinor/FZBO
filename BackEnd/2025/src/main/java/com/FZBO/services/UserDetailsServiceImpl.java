package com.FZBO.services;

import com.FZBO.models.User;
import com.FZBO.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user == null) {

            user = new User();
            user.setUsername(username);
            user.setEmail(user.getEmail());
            user.setFirstName(user.getFirstName());
            user.setLastName(user.getLastName());
            user.setFirstLogin(true);
            userRepository.save(user);
        }

        return UserDetailsImpl.build(user);
    }
}