package com.example.demo.entity.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Inventory;
import com.example.demo.repository.InventoryRepository;

@RestController
@RequestMapping("/inventories")
@CrossOrigin(origins = "*")
public class InventoryController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping
    public List<Inventory> findAllInventory() {
        return inventoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inventory> findHeroById(@PathVariable Long id) {
        Optional<Inventory> hero = inventoryRepository.findById(id);
        if (hero.isPresent()) {
            return ResponseEntity.ok(hero.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Inventory> createInventory(@RequestBody Inventory inventory) {
        Inventory createdHero = inventoryRepository.save(inventory);
        return ResponseEntity.ok(createdHero);
    }

    @GetMapping("/buscarpornombre")
    public List<Inventory> findHeroByName(@RequestParam String name) {
        return inventoryRepository.findByName(name);
    }
    
}
