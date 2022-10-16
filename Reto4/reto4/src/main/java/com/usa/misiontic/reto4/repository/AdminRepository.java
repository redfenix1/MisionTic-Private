package com.usa.misiontic.reto4.repository;

import com.usa.misiontic.reto4.entities.Admin;
import com.usa.misiontic.reto4.repository.crudRepository.AdminCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {
    @Autowired
    private AdminCrudRepository AdminCrudRepository;

    public List<Admin> getAll(){
        return (List<Admin>) AdminCrudRepository.findAll();
    }

    public Optional<Admin> getAdmin(int id){
        return AdminCrudRepository.findById(id);
    }

    public Admin save(Admin c){
        return AdminCrudRepository.save(c);
    }

    public void delete(Admin c){
        AdminCrudRepository.delete(c);
    }
}
