/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import co.edu.usa.interfaces.CategoryInterface;
import co.edu.usa.modelo.Category;

/**
 *
 * @author JaliNet
 */
@Repository
public class CategoryRepository {
   
    @Autowired
    private CategoryInterface categoryCrudRepository;
    
    public List<Category> getAll() {
      return (List<Category>) categoryCrudRepository.findAll();};
  
    public Optional<Category> getCategory(int id) {return categoryCrudRepository.findById(id);};
  
    public Category save(Category category) { return categoryCrudRepository.save(category);};
    
    public void delete(Category category ) {categoryCrudRepository.delete(category);};

    
}
