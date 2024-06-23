package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
   
    private String pid;

    @Column(nullable = false, unique = true)
    private String productName;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Seller seller;

    @Column(nullable = false)
    private int quantityAvailable;

    // Constructors, getters, and setters

    public Product() {
    }

    public Product(String pid,String productName, Seller seller, int quantityAvailable) {
    	this.pid = pid;
    	this.productName = productName;
        this.seller = seller;
        this.quantityAvailable = quantityAvailable;
    }

    public String getId() {
        return pid;
    }

    public void setId(String pid) {
        this.pid = pid;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public int getQuantityAvailable() {
        return quantityAvailable;
    }

    public void setQuantityAvailable(int quantityAvailable) {
        this.quantityAvailable = quantityAvailable;
    }
}
