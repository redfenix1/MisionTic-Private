/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.controlador;

import co.edu.usa.modelo.Reservation;
import co.edu.usa.servicio.ReservationServicio;
import java.util.List;
import java.util.Optional;

import co.edu.usa.servicio.reportes.ContadorClientes;
import co.edu.usa.servicio.reportes.StatusReservas;
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
@RequestMapping ("/api/Reservation")
public class ReservationControlador {
      @Autowired
    private ReservationServicio reservationServicio;
    
//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/all")
      public List<Reservation> getReservations() {
          return reservationServicio.getAll();
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @GetMapping("/{id}")
      public Optional<Reservation> getreservation(@PathVariable("id") int reservationId) {
          return reservationServicio.getReservation(reservationId);
      }

//    @CrossOrigin(origins = "http://132.226.240.254")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED ) 
      public Reservation save(@RequestBody Reservation reservation) {
          return reservationServicio.save(reservation);
      }

    @GetMapping("/report-status")
    public StatusReservas getStatusReservas() {
        return reservationServicio.ReservacionStatus();
    }

    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getReservasTiempo(@PathVariable("dateOne") String fechaInicial,@PathVariable("dateTwo") String fechaFinal) {
        return reservationServicio.ReservacionTiempo(fechaInicial, fechaFinal);
    }

    @GetMapping("/report-clients")
    public List<ContadorClientes> getClientes() {
        return reservationServicio.reporteClientes();
    }

}

//    @PutMapping("/update")
//    @ResponseStatus(HttpStatus.CREATED ) 
//      public Category update(@RequestBody Box box) {
//          return categoryServicio.update(box);};
//
//
//    @DeleteMapping("/{id}")
//      public void delete(@PathVariable("id") int categoryId) {categoryServicio.deleteCategory(categoryId);};
//     

