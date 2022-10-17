package com.usa.misiontic.reto5.service;

import com.usa.misiontic.reto5.entities.Client;
import com.usa.misiontic.reto5.entities.Reservation;
import com.usa.misiontic.reto5.repository.ReservationRepository;
import com.usa.misiontic.reto5.service.reports.CountClients;
import com.usa.misiontic.reto5.service.reports.StatusReservations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
            //r.setStatus("created");
            return reservationRepository.save(r);
        }else{
            Optional<Reservation> tmp = reservationRepository.getReservation(r.getIdReservation());
            if(tmp.isEmpty()){
                //r.setStatus("created");
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
                    //tmp.get().setStatus("updated");
                    tmp.get().setStatus(r.getStatus());
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

    // Adición reto 5
    public StatusReservations StatusReservation(){
        List<Reservation> completed = reservationRepository.ReservationStatus("completed");
        List<Reservation> cancelled = reservationRepository.ReservationStatus("cancelled");

        return new StatusReservations(completed.size(), cancelled.size());
    }

    public List<Reservation> ReservationTime(String fechaInicial,String fechaFinal){
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        //SimpleDateFormat parser = new SimpleDateFormat("YYYY-mm-dd");

        Date fechaUno = new Date();
        Date fechaDos = new Date();

        try {
            fechaUno = parser.parse(fechaInicial);
            fechaDos = parser.parse(fechaFinal);
        } catch (ParseException evt) {
            evt.printStackTrace();
        }

        if (fechaUno.before(fechaDos)) {
            return reservationRepository.ReservationTime(fechaUno, fechaDos);
        } else {
            return new ArrayList<>();
        }
    }

    public List<CountClients> reportClients() {
        List<CountClients> resultado = new ArrayList<>();
        List<Object[]> reporte = reservationRepository.reportClients();
        System.out.println(reporte);
        for (int i = 0; i < reporte.size(); i++) {
            resultado.add(new CountClients((Long) reporte.get(i)[1], (Client) reporte.get(i)[0]));
        }
        return resultado;
    }
}
