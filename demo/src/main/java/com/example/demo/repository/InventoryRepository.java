package com.example.demo.repository;

import com.example.demo.entity.Inventory;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface InventoryRepository extends JpaRepository<Inventory, Long>{
    List<Inventory> findByName(String name);

    @Query("SELECT b FROM Inventory b WHERE b.id = :id")
    Inventory existsById(long id);
}