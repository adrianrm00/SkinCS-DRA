package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Inventory;

import com.example.demo.service.InventoryService;

import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/inventories")
@CrossOrigin(origins = "*")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<Inventory> findAllInventory() {
        return inventoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inventory> findHeroById(@PathVariable Long id) {
        Inventory inventory = inventoryService.findById(id);
        if (inventory == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(inventory);
       
    }

    @PostMapping
    public ResponseEntity<Inventory> createInventory(@RequestBody Inventory inventory) {
        Inventory createdInventory = inventoryService.save(inventory);
        return ResponseEntity.ok(createdInventory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inventory> updateInventory(@PathVariable Long id, @RequestBody Inventory updatedInventory) {
        Inventory existingInventory = inventoryService.findById(id);
        if (existingInventory == null) {
            return ResponseEntity.notFound().build();
        }
        
        existingInventory.setName(updatedInventory.getName());
        
        Inventory updated = inventoryService.save(existingInventory);
        return ResponseEntity.ok(updated);
    }   
    
}