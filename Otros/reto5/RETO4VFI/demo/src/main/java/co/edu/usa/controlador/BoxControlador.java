/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Box;
import co.edu.usa.servicio.BoxServicio;
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
 * @author cala0
 */
@RestController
@RequestMapping("/api/Box")
public class BoxControlador {
    @Autowired
    private BoxServicio boxServicio;
    
//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Box> getBoxes() {
          return boxServicio.getAll();
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Box> getBox(@PathVariable("id") int boxId) {
          return boxServicio.getBox(boxId);
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Box save(@RequestBody Box box) {
          return boxServicio.save(box);
      }

      
//////// RETO 4       
      
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Box update(@RequestBody Box box) {
        return boxServicio.update(box);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int boxId) {
        return boxServicio.deleteBox(boxId);
    }   
    
}
