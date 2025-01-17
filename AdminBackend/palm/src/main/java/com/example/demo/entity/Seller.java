package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "sellers")
public class Seller {

    @Id
    
    private String sid;

    @Column(nullable = false, unique = true)
    private String sellerName;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    private Set<Product> products = new HashSet<>();

    // Constructors, getters, and setters

    public Seller() {
    }

    public Seller(String sellerName,String sid) {
        this.sid = sid;
    	this.sellerName = sellerName;
    }

    public String getId() {
        return sid;
    }

    public void setId(String id) {
        this.sid = id;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

//    public Set<Product> getProducts() {
//        return products;
//    }
//
//    public void setProducts(Set<Product> products) {
//        this.products = products;
//    }
//
//    public void addProduct(Product product) {
//        products.add(product);
//        product.setSeller(this);
//    }
//
//    public void removeProduct(Product product) {
//        products.remove(product);
//        product.setSeller(null);
//    }
}
