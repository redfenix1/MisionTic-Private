package Controller;

import Service.BoxService;
import entities.Admin;
import entities.Box;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Box")
public class ControllerBox {
@Autowired
private BoxService boxService;

    @GetMapping("/all")
    public List<Box> getAll(){return boxService.getAll();}

    @GetMapping("/{id}")
    public Optional<Box> getBox(@PathVariable("id") int id){return boxService.getBox(id);}

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Box save(@RequestBody Box p) {return boxService.save(p);}

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Box update(@RequestBody Box p){ return boxService.update(p);}

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){return boxService.delete(id);}
}