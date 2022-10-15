package com.usa.misiontic.reto3.controller;

import com.usa.misiontic.reto3.entities.Box;
import com.usa.misiontic.reto3.service.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/box")
public class BoxController {

    @Autowired
    private BoxService boxService;

    @GetMapping("/all")
    public List<Box> getBoxes(){
        return boxService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Box> getBox(@PathVariable("id") int idBox){
        return boxService.getBox(idBox);
    }

    @PostMapping("/save")
    public Box save(@RequestBody Box b){
        return boxService.save(b);
    }

    @PutMapping("/update")
    public Box update(@RequestBody Box b){
        return boxService.update(b);
    }

    @DeleteMapping("/delete")
    public boolean delete(@PathVariable("id") int idBox){
        return boxService.delete(idBox);
    }

}
