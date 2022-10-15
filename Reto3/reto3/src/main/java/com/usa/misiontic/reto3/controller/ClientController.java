package com.usa.misiontic.reto3.controller;

import com.usa.misiontic.reto3.entities.Client;
import com.usa.misiontic.reto3.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public List<Client> getClients(){
        return clientService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Client> getClient(@PathVariable("id") int idClient){
        return clientService.getClient(idClient);
    }

    @PostMapping("/save")
    public Client save(@RequestBody Client b){
        return clientService.save(b);
    }

    @PutMapping("/update")
    public Client update(@RequestBody Client b){
        return clientService.update(b);
    }

    @DeleteMapping("/delete")
    public boolean delete(@PathVariable("id") int idClient){
        return clientService.delete(idClient);
    }

}
