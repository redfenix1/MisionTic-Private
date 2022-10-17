/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Category;
import co.edu.usa.servicio.CategoryServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
 *
 */
@RestController
@RequestMapping ("/api/Category")
@CrossOrigin(origins = "*")
public class CategoryControlador {
        @Autowired
    private CategoryServicio categoryServicio;
    
//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Category> getCategorys() {
          return categoryServicio.getAll();};

//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Category> getCategory(@PathVariable("id") int categoryId) {
          return categoryServicio.getCategory(categoryId);
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Category save(@RequestBody Category category) {
          return categoryServicio.save(category);};


    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Category update(@RequestBody Category category) {
          return categoryServicio.update(category);};


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int categoryId){
        return categoryServicio.deleteCategory(categoryId);
    }
      
}
