package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.example.demo.dto.WeaponDataDto;

@Component("weaponDataService")
public class WeaponDataService {
    public List<WeaponDataDto> retrieveWeaponData(){
        List<WeaponDataDto> weaponData= new ArrayList<WeaponDataDto>();

        try{
            Document webPage = Jsoup.connect("https://developer.valvesoftware.com/wiki/Category:Counter-Strike:_Global_Offensive_Weapons").get();

            Element mwPagesDiv = webPage.getElementById("mw-pages");
           
            Elements ulListElements = mwPagesDiv.select("div.mw-category-group ul");
            
            for (Element ulElement : ulListElements) {
                // Encuentra todos los elementos de lista li dentro del elemento de lista ul
                Elements liElements = ulElement.select("li");
                
                // Itera sobre los elementos de lista li
                for (Element liElement : liElements) {
                    // Encuentra el enlace a dentro del elemento de lista li y obtén la URL y el título
                    String name = liElement.select("a").attr("title");

                    weaponData.add(new WeaponDataDto(name));
                }
            }
            return weaponData;

        } catch (IOException e){
            e.printStackTrace();
        }
        return null;
    }
    
}
