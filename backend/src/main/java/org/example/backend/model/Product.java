package org.example.backend.model;

import org.springframework.data.annotation.Id;

public record Product(@Id
                      String id,
                      String name,
                      String description,
                      double price,
                      int quantity
                      ) {

    public Product(String name, String description, double price, int quantity) {
        this(null, name, description, price, quantity);
    }

    public Product withId(String id) {
        return new Product(id, name, description, price, quantity);
    }
}