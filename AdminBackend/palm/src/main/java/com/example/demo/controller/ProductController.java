package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // Get a product by ID
    @GetMapping("/{pid}")
    public Product getProductById(@PathVariable String pid) {
        return productService.getProductById(pid);
    }

    // Create a new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    // Update a product
    @PutMapping("/{pid}")
    public Product updateProduct(@PathVariable String pid, @RequestBody Product product) {
        product.setId(pid);
        return productService.saveProduct(product);
    }

    // Delete a product
    @DeleteMapping("/{pid}")
    public void deleteProduct(@PathVariable String pid) {
        productService.deleteProduct(pid);
    }
}
