/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Costume;
import co.edu.usa.servicio.CostumeServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JaliNet
 */
@RestController
@RequestMapping("/api/Costume")
public class CostumeControlador {
    @Autowired
    private CostumeServicio costumeServicio;
    
    ///@CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Costume> getCostumes() {
          return costumeServicio.getAll();};

    //@CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Costume> getCostume(@PathVariable("id") int costumeId) {
          return costumeServicio.getCostume(costumeId);
      }
    
      
      //@CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED) 
    public Costume save(@RequestBody Costume costume) {
        return costumeServicio.save(costume);};

      //@CrossOrigin(origins = "http://132.226.240.254")
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED) 
    public Costume update(@RequestBody Costume costume) {
    return costumeServicio.update(costume);};
//
////            @CrossOrigin(origins = "http://132.226.240.254")

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) 
    public boolean delete(@PathVariable("id") int costumeId) {
        return costumeServicio.deleteCostume(costumeId);
    }

    
}
