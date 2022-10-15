package com.usa.misiontic.reto4.service;

import com.usa.misiontic.reto4.entities.Client;
import com.usa.misiontic.reto4.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll(){
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id){
        return clientRepository.getClient(id);
    }

    public Client save(Client c){
        if(c.getIdClient() == null){
            return clientRepository.save(c);
        }else{
            Optional<Client> tmp = clientRepository.getClient(c.getIdClient());
            if(tmp.isEmpty()){
                return clientRepository.save(c);
            }else{
                return c;
            }
        }
    }

    public Client update(Client c){
        if(c.getIdClient() != null){
            Optional<Client> tmp = clientRepository.getClient(c.getIdClient());
            if(!tmp.isEmpty()){
                if(c.getName() != null){
                    tmp.get().setName(c.getName());
                }
                if(c.getEmail() != null){
                    tmp.get().setEmail(c.getEmail());
                }
                if(c.getAge() != null){
                    tmp.get().setAge(c.getAge());
                }
                if(c.getPassword() != null){
                    tmp.get().setPassword(c.getPassword());
                }
                clientRepository.save(tmp.get());
                return tmp.get();
            }else{
                return c;
            }
        }else{
            return c;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Client> c = clientRepository.getClient(id);
        if(c.isPresent()){
            clientRepository.delete(c.get());
            flag = true;
        }
        return flag;
    }
}
