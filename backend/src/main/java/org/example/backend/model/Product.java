package org.example.backend.model;

import org.springframework.data.annotation.Id;

public record Product(@Id
                      String id,
                      String name,
                      String description,
                      double price,
                      int quantity
                      ) {}