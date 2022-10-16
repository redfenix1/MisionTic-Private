package com.usa.misiontic.reto4.controller;

import com.usa.misiontic.reto4.entities.Box;
import com.usa.misiontic.reto4.service.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Box")
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
    @ResponseStatus(HttpStatus.CREATED)
    public Box save(@RequestBody Box b){
        return boxService.save(b);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Box update(@RequestBody Box b){
        return boxService.update(b);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int idBox){
        return boxService.delete(idBox);
    }

}
