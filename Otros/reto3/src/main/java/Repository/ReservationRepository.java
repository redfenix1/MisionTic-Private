package Repository;

import Repository.CrudRepository.ReservationCrudRepository;
import entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
@Autowired
    private ReservationCrudRepository reservationCrudRepository;
    public List<Reservation> getAll(){ return (List<Reservation>) reservationCrudRepository.findAll();}
    public Optional<Reservation> getReservation(int id) {return reservationCrudRepository.findById(id);}
    public Reservation save( Reservation c) {return reservationCrudRepository.save(c);}
    public void delete(Reservation c) { reservationCrudRepository.delete(c);}

}
