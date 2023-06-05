package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.WeaponDataDto;
import com.example.demo.service.WeaponDataService;

@RestController
@RequestMapping("/weapons")
@CrossOrigin(origins = "*")
public class WeaponDataController {

    @Autowired
    private WeaponDataService weaponDataService;

    @GetMapping("/data")
    public ResponseEntity<List<WeaponDataDto>> retrieveWeaponData() {
        return new ResponseEntity<List<WeaponDataDto>>(weaponDataService.retrieveWeaponData(), HttpStatus.OK);
    }
    
}
