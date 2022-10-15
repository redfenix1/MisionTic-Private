package com.usa.misiontic.reto3.controller;

import com.usa.misiontic.reto3.entities.Category;
import com.usa.misiontic.reto3.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getCategories(){
        return categoryService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Category> getCategory(@PathVariable("id") int idCategory){
        return categoryService.getCategory(idCategory);
    }

    @PostMapping("/save")
    public Category save(@RequestBody Category c){
        return categoryService.save(c);
    }

    @PutMapping("/update")
    public Category update(@RequestBody Category c){
        return categoryService.update(c);
    }

    @DeleteMapping("/delete")
    public boolean delete(@PathVariable("id") int idCategory){
        return categoryService.delete(idCategory);
    }

}
