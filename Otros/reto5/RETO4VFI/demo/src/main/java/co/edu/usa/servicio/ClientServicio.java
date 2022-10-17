/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.servicio;

import co.edu.usa.modelo.Client;
import co.edu.usa.repositorio.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author cala0
 */
@Service
public class ClientServicio {
    @Autowired

    private ClientRepository clientRepository;
    
    public List<Client> getAll() {
    return (List<Client>) clientRepository.getAll();};
  
    public Optional<Client> getClient(int id) {return clientRepository.getClient(id);};
  
    public Client save(Client client) { 
        if (client.getIdClient() == null){
           return clientRepository.save(client);
       }
       else
       {
          Optional<Client> co =  clientRepository.getClient(client.getIdClient());
          if (co.isEmpty()){
              return clientRepository.save(client);
          }
          else
          {
              return client;
          }
        }
    }
    public Client update (Client client){
        if (client.getIdClient() != null){
            Optional<Client> e = clientRepository.getClient(client.getIdClient());
            if (!e.isEmpty()){
                if (client.getName()!= null){
                    e.get().setName(client.getName());
                }
                if (client.getAge()!= null){
                    e.get().setAge(client.getAge());
                }
                if (client.getPassword()!= null){
                    e.get().setPassword(client.getPassword());
                }
                if (client.getEmail()!= null){
                    e.get().setEmail(client.getEmail());
                }
                clientRepository.save(e.get());
                return e.get();
            }
            else
            {
                return client;
            }
        }
        else
        {
            return client;
        }
    }
  
  public boolean deleteClient (int id){
   
      /** alternativa de Delete
      Optional<Category> category = categoryRepository.getCategory(id);
      if (category.isEmpty()){
          return false;
      }
      else 
      {
          categoryRepository.delete(category.get());
          return true;
      }
      */
      
      Boolean aBoolean = getClient(id).map(
              client->{
            clientRepository.delete(client);
            return true;
        }).orElse(false);
        return aBoolean;
   
    }
}


