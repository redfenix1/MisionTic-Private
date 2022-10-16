package com.usa.misiontic.reto4.service;

import com.usa.misiontic.reto4.entities.Admin;
import com.usa.misiontic.reto4.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository AdminRepository;

    public List<Admin> getAll(){
        return AdminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id){
        return AdminRepository.getAdmin(id);
    }

    public Admin save(Admin a){
        if(a.getIdAdmin() == null){
            return AdminRepository.save(a);
        }else{
            Optional<Admin> tmp = AdminRepository.getAdmin(a.getIdAdmin());
            if(tmp.isEmpty()){
                return AdminRepository.save(a);
            }else{
                return a;
            }
        }
    }

    public Admin update(Admin a){
        if(a.getIdAdmin() != null){
            Optional<Admin> tmp = AdminRepository.getAdmin(a.getIdAdmin());
            if(!tmp.isEmpty()){
                if(a.getName() != null){
                    tmp.get().setName(a.getName());
                }
                if(a.getEmail() != null){
                    tmp.get().setEmail(a.getEmail());
                }
                if(a.getPassword() != null){
                    tmp.get().setPassword(a.getPassword());
                }
                if(a.getName() != null){
                    tmp.get().setName(a.getName());
                }
                AdminRepository.save(tmp.get());
                return tmp.get();
            }else{
                return a;
            }
        }else{
            return a;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Admin> c = AdminRepository.getAdmin(id);
        if(c.isPresent()){
            AdminRepository.delete(c.get());
            flag = true;
        }
        return flag;
    }
}
