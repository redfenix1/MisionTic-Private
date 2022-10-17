/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.interfaces;

import co.edu.usa.modelo.Box;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author cala0
 */
public interface BoxInterface extends CrudRepository<Box, Integer> {
    
}