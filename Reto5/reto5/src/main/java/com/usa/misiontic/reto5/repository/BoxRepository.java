package com.usa.misiontic.reto5.repository;

import com.usa.misiontic.reto5.entities.Box;
import com.usa.misiontic.reto5.repository.crudRepository.BoxCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class BoxRepository {
    @Autowired
    private BoxCrudRepository boxCrudRepository;

    public List<Box> getAll(){
        return (List<Box>) boxCrudRepository.findAll();
    }

    public Optional<Box> getBox(int id){
        return boxCrudRepository.findById(id);
    }

    public Box save(Box b){
        return boxCrudRepository.save(b);
    }

    public void delete(Box b){
        boxCrudRepository.delete(b);
    }
}
