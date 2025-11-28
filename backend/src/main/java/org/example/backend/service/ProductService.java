package org.example.backend.service;

import org.example.backend.model.Product;
import org.example.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product product) {
        String id = UUID.randomUUID().toString();
        return productRepository.createProduct(product.withId(id));
    }

    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    public Product getProductById(String id) {
        return productRepository.getProductById(id);
    }

    public Product updateProduct(Product product) {
        return productRepository.update(product);
    }

    public void deleteProduct(String id) {
        productRepository.deleteProduct(id);
    }

}
