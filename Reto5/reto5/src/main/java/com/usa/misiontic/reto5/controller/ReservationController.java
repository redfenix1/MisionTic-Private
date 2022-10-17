package com.usa.misiontic.reto5.controller;

import com.usa.misiontic.reto5.entities.Reservation;
import com.usa.misiontic.reto5.service.ReservationService;
import com.usa.misiontic.reto5.service.reports.CountClients;
import com.usa.misiontic.reto5.service.reports.StatusReservations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<Reservation> getReservations(){
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("id") int idReservation){
        return reservationService.getReservation(idReservation);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation c){
        return reservationService.save(c);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation c){
        return reservationService.update(c);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int idReservation){
        return reservationService.delete(idReservation);
    }

    // Adición reto 5
    @GetMapping("/report-status")
    public StatusReservations getStatusReservations() {
        return reservationService.StatusReservation();
    }

    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getReservarionsTime(@PathVariable("dateOne") String fechaInicial,@PathVariable("dateTwo") String fechaFinal) {
        return reservationService.ReservationTime(fechaInicial, fechaFinal);
    }

    @GetMapping("/report-clients")
    public List<CountClients> getClients() {
        return reservationService.reportClients();
    }
}
