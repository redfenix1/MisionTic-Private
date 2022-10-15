package com.usa.misiontic.reto3.service;

import com.usa.misiontic.reto3.entities.Reservation;
import com.usa.misiontic.reto3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation r){
        if(r.getIdReservation() == null){
            r.setStatus("created");
            return reservationRepository.save(r);
        }else{
            Optional<Reservation> tmp = reservationRepository.getReservation(r.getIdReservation());
            if(tmp.isEmpty()){
                r.setStatus("created");
                return reservationRepository.save(r);
            }else{
                return r;
            }
        }
    }

    public Reservation update(Reservation r){
        if(r.getIdReservation() != null){
            Optional<Reservation> tmp = reservationRepository.getReservation(r.getIdReservation());
            if(!tmp.isEmpty()){
                if(r.getStartDate() != null){
                    tmp.get().setStartDate(r.getStartDate());
                }
                if(r.getDevolutionDate() != null){
                    tmp.get().setDevolutionDate(r.getDevolutionDate());
                }
                if(r.getStatus() != null){
                    tmp.get().setStatus("updated");
                    // tmp.get().setStatus(r.getStatus());
                }
                reservationRepository.save(tmp.get());
                return tmp.get();
            }else{
                return r;
            }
        }else{
            return r;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Reservation> r = reservationRepository.getReservation(id);
        if(r.isPresent()){
            reservationRepository.delete(r.get());
            flag = true;
        }
        return flag;
    }
}
