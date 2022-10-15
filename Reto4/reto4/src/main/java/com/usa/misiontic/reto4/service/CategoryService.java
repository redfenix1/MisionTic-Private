package com.usa.misiontic.reto4.service;

import com.usa.misiontic.reto4.entities.Category;
import com.usa.misiontic.reto4.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll(){
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id){
        return categoryRepository.getCategory(id);
    }

    public Category save(Category b){
        if(b.getId() == null){
            return categoryRepository.save(b);
        }else{
            Optional<Category> tmp = categoryRepository.getCategory(b.getId());
            if(tmp.isEmpty()){
                return categoryRepository.save(b);
            }else{
                return b;
            }
        }
    }

    public Category update(Category b){
        if(b.getId() != null){
            Optional<Category> tmp = categoryRepository.getCategory(b.getId());
            if(!tmp.isEmpty()){
                if(b.getName() != null){
                    tmp.get().setName(b.getName());
                }
                if(b.getDescription() != null){
                    tmp.get().setDescription(b.getDescription());
                }
                categoryRepository.save(tmp.get());
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
        Optional<Category> c = categoryRepository.getCategory(id);
        if(c.isPresent()){
            categoryRepository.delete(c.get());
            flag = true;
        }
        return flag;
    }
}
