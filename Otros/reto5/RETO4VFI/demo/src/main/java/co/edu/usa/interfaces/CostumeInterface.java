/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.interfaces;

import co.edu.usa.modelo.Costume;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author JaliNet
 */
public interface CostumeInterface extends CrudRepository<Costume, Integer>{
    
}
