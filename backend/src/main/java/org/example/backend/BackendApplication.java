package org.example.backend;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @PostConstruct
    public void checkEnv() {
        System.out.println("🔍 MONGO_DB_URI from environment = " + System.getenv("MONGO_DB_URI"));
    }
}
