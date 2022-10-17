/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Client;
import co.edu.usa.servicio.ClientServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author cala0
 */
@RestController
@RequestMapping ("/api/Client")
public class ClientControlador {
   @Autowired
    private ClientServicio clientServicio;
    
//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Client> getClientes() {
          return clientServicio.getAll();
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Client> getClient(@PathVariable("id") int clientId) {
          return clientServicio.getClient(clientId);
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Client save(@RequestBody Client client) {
          return clientServicio.save(client);
      } 
      
      
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Client update(@RequestBody Client client) {
          return clientServicio.update(client);};


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int clientId){ 
        return clientServicio.deleteClient(clientId);
    }
      


}

//@DeleteMapping("/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public boolean delete(@PathVariable("id") int gamaId) {
//        return gamaService.deleteGama(gamaId);
//    }
