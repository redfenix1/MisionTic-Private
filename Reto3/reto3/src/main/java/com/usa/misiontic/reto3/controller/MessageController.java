package com.usa.misiontic.reto3.controller;

import com.usa.misiontic.reto3.entities.Message;
import com.usa.misiontic.reto3.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public List<Message> getMessages(){
        return messageService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessage(@PathVariable("id") int idMessage){
        return messageService.getMessage(idMessage);
    }

    @PostMapping("/save")
    public Message save(@RequestBody Message b){
        return messageService.save(b);
    }

    @PutMapping("/update")
    public Message update(@RequestBody Message b){
        return messageService.update(b);
    }

    @DeleteMapping("/delete")
    public boolean delete(@PathVariable("id") int idMessage){
        return messageService.delete(idMessage);
    }

}
