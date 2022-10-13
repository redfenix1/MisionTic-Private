package com.usa.misiontic.reto3.service;

import com.usa.misiontic.reto3.entities.Box;
import com.usa.misiontic.reto3.repository.BoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoxService {

    @Autowired
    private BoxRepository boxRepository;

    public List<Box> getAll(){
        return boxRepository.getAll();
    }

    public Optional<Box> getBox(int id){
        return boxRepository.getBox(id);
    }

    public Box save(Box b){
        if(b.getId() == null){
            return boxRepository.save(b);
        }else{
            Optional<Box> tmp = boxRepository.getBox(b.getId());
            if(tmp.isEmpty()){
                return boxRepository.save(b);
            }else{
                return b;
            }
        }
    }

    public Box update(Box b){
        if(b.getId() != null){
            Optional<Box> tmp = boxRepository.getBox(b.getId());
            if(!tmp.isEmpty()){
                if(b.getLocation() != null){
                    tmp.get().setLocation(b.getLocation());
                }
                if(b.getCapacity() != null){
                    tmp.get().setCapacity(b.getCapacity());
                }
                if(b.getCategory() != null){
                    tmp.get().setCategory(b.getCategory());
                }
                if(b.getName() != null){
                    tmp.get().setName(b.getName());
                }
                if(b.getDescription() != null){
                    tmp.get().setDescription(b.getDescription());
                }
                boxRepository.save(tmp.get());
                return tmp.get();
            }else{
                return b;
            }
        }else{
            return b;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Box> b = boxRepository.getBox(id);
        if(b.isPresent()){
            boxRepository.delete(b.get());
            flag = true;
        }
        return flag;
    }
}
