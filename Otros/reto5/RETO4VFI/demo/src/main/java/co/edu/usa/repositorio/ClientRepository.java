/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import co.edu.usa.interfaces.ClientInterface;
import co.edu.usa.modelo.Client;


/**
 *
 * @author cala0
 */
@Repository
public class ClientRepository {
    
    @Autowired
    private ClientInterface clientCrudRepository;
    
    public List<Client> getAll() {
      return (List<Client>) clientCrudRepository.findAll();};
  
    public Optional<Client> getClient(int id) {return clientCrudRepository.findById(id);};
  
    public Client save(Client client) { return clientCrudRepository.save(client);};
    
    public void delete(Client client ) {clientCrudRepository.delete(client);};
    
    
}
