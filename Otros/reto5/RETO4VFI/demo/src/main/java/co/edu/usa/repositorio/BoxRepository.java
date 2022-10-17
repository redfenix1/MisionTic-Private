/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import co.edu.usa.interfaces.BoxInterface;
import co.edu.usa.modelo.Box;

/**
 *
 * @author cala0
 */

@Repository
public class BoxRepository {
    
    @Autowired
    private BoxInterface boxCrudRepository;
    
    public List<Box> getAll() {
      return (List<Box>) boxCrudRepository.findAll();};
  
    public Optional<Box> getBox(int id) {return boxCrudRepository.findById(id);};
  
    public Box save(Box box) { return boxCrudRepository.save(box);};
    
    public void delete(Box box) {boxCrudRepository.delete(box);};
    
    
}
