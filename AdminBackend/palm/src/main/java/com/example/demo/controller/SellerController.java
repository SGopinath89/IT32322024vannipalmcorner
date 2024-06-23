package com.example.demo.controller;

import com.example.demo.entity.Seller;

import com.example.demo.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/sellers")
public class SellerController {

   

    @Autowired
    private SellerService sellerService;
    
    // Get all sellers
    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerService.getAllSellers();
    }

    @GetMapping("/{sid}")
    public Seller getSellerById(@PathVariable String sid) {
        return sellerService.getSellerById(sid);
    }

    @PostMapping
    public Seller createSeller(@RequestBody Seller seller) {
        return sellerService.saveSeller(seller);
    }

    @PutMapping("/{sid}")
    public Seller updateSeller(@PathVariable String sid, @RequestBody Seller seller) {
        seller.setId(sid);
        return sellerService.saveSeller(seller);
    }

    @DeleteMapping("/{sid}")
    public void deleteSeller(@PathVariable String sid) {
        sellerService.deleteSeller(sid);
    }
}
