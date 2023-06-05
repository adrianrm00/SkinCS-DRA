package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Inventory;
import com.example.demo.repository.InventoryRepository;

import java.util.List;

@Service
public class InventoryService {
    
    @Autowired
    private InventoryRepository inventoryRepository;
    
    public List<Inventory> findAll() {
        return inventoryRepository.findAll();
    }

    public Inventory findById(long id) {
        return inventoryRepository.findById(id).orElse(null);
    }

    public Inventory save(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public void deleteById(long id) {
        inventoryRepository.deleteById(id);
    }

    public List<Inventory> findByName(String name) {
        return inventoryRepository.findByName(name);
    }

}
