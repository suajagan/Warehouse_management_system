package org.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("products")
public record Product(
        @Id
        String id,
        String name,
        String description,
        double price,
        int quantity,
        String category
) {

    public Product(String name, String description, double price, int quantity, String category) {
        this(null, name, description, price, quantity, category);
    }

    public Product withId(String id) {
        return new Product(id, name, description, price, quantity, category);
    }
}
