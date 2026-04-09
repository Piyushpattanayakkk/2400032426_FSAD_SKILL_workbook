package com.piyush.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class JwtAuthSystemApplication {

    public static void main(String[] args) {

        // Ã°Å¸â€Â´ TEMPORARY: generate password
        System.out.println(new BCryptPasswordEncoder().encode("1234"));

        SpringApplication.run(JwtAuthSystemApplication.class, args);
    }
}