/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.servicio;

import co.edu.usa.modelo.Category;
import co.edu.usa.repositorio.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JaliNet
 */
@Service
public class CategoryServicio {
    @Autowired
    private CategoryRepository categoryRepository;
    
   public List<Category> getAll() {
   return (List<Category>) categoryRepository.getAll();};
  
  public Optional<Category> getCategory(int id) {return categoryRepository.getCategory(id);};
  
  public Category save(Category category) { 
       if (category.getId()== null){
           return categoryRepository.save(category);
       }
       else
       {
          Optional<Category> co =  categoryRepository.getCategory(category.getId());
          if (co.isEmpty()){
              return categoryRepository.save(category);
          }
          else
          {
              return category;
          }
       }
 
    }

//  public Category update (Category category){
//        if (category.getId() != null){
//            Optional<Category> e = categoryRepository.getCategory(category.getId());
//            if (!e.isEmpty()){
//                if (category.getDescription()!= null){
//                    e.get().setDescription(category.getDescription());
//                }
//                categoryRepository.save(e.get());
//                return e.get();
//            }
//            else
//            {
//                return category;
//            }
//        }
//        else
//        {
//            return category;
//        }
//    }
  
  public Category update(Category category) {
        if (category.getId() != null) {
            Optional<Category> g = categoryRepository.getCategory(category.getId ());
            if (!g.isEmpty()) {
                if (category.getDescription() != null) {
                    g.get().setDescription(category.getDescription());
                }
                if (category.getName() != null) {
                    g.get().setName(category.getName());
                }
                return categoryRepository.save(g.get());
            }
        }
        return category;
    }

  
  public boolean deleteCategory (int id){
   
      /** alternativa de Delete
      Optional<Category> category = categoryRepository.getCategory(id);
      if (category.isEmpty()){
          return false;
      }
      else 
      {
          categoryRepository.delete(category.get());
          return true;
      }
      */
      
      Boolean aBoolean = getCategory(id).map(
              category->{
            categoryRepository.delete(category);
            return true;
        }).orElse(false);
        return aBoolean;
   
  }

}
