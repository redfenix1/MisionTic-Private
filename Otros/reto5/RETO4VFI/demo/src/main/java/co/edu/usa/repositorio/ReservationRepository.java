/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.repositorio;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import co.edu.usa.servicio.reportes.ContadorClientes;
import co.edu.usa.servicio.reportes.StatusReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import co.edu.usa.interfaces.ReservationInterface;
import co.edu.usa.modelo.Reservation;

/**
 *
 * @author cala0
 */

@Repository
public class ReservationRepository {
    
    @Autowired
    private ReservationInterface reservationCrudRepository;
    
    public List<Reservation> getAll() {
      return (List<Reservation>) reservationCrudRepository.findAll();};
  
    public Optional<Reservation> getReservation(int id) {return reservationCrudRepository.findById(id);};
  
    public Reservation save(Reservation reservation) { return reservationCrudRepository.save(reservation);};

    //Adicion reto 5

    public List<Reservation> ReservacionStatus(String status){
        return reservationCrudRepository.findAllByStatus(status);
    }

    public List<Reservation> ReservacionTiempo(Date fechaInicial, Date fechaFinal){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(fechaInicial, fechaFinal);
    }


    public   List<Object[]> reporteClientes() {
        return reservationCrudRepository.reporteClientes();

    }

    public void delete(Reservation reservation) {reservationCrudRepository.delete(reservation);};
}
