package org.example.backend.repository;

import org.example.backend.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductRepository  {

    private final Map<String, Product> products = new HashMap<>();

    public Product createProduct(Product product){
        products.put(product.id(), product);
        return product;
    }

   public List<Product> getAllProducts(){
        return new ArrayList<>(products.values());
    }

    public Product getProductById(String id){
        return products.get(id);
    }

    public Product update(Product product){
        products.put(product.id(), product);
        return product;
    }

    public void deleteProduct(String id){
        products.remove(id);
    }
}
