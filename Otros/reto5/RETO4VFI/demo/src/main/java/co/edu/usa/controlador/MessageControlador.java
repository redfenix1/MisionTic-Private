/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Message;
import co.edu.usa.servicio.MessageServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author cala0
 */
@RestController
@RequestMapping ("/api/Message")
public class MessageControlador {
      @Autowired
    private MessageServicio messageServicio;
    
//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Message> getMessages() {
          return messageServicio.getAll();
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Message> getMessage(@PathVariable("id") int messageId) {
          return messageServicio.getMessage(messageId);
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Message save(@RequestBody Message message) {
          return messageServicio.save(message);
      } 
      
//      }
//    @PutMapping("/update")
//    @ResponseStatus(HttpStatus.CREATED ) 
//    public Message update(@RequestBody Message message) {
//        return messageServicio.update(message);};
//
//
//    @DeleteMapping("/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public boolean delete(@PathVariable("id") int messageId){ 
//        return messageServicio.deleteMessage(messageId);
}
