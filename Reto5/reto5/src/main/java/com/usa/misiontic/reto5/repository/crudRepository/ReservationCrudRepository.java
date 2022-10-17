package com.usa.misiontic.reto5.repository.crudRepository;

import com.usa.misiontic.reto5.entities.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {
    // Cantidad de reservas completatas vs canceladas
    public List<Reservation> findAllByStatus(String status);

    // Cantidad de reservas en un tiempo determinado.
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date fechaInicio, Date fechaFin);

    // Top de los clientes que más dinero le han dejado a la compañía.
    // INSTRUCCION SQL SELECT clientid, COUNT(*) AS total FROM reservacion group by clientid order by desc;
    @Query("SELECT c.client, COUNT(c.client) from Reservation AS c  group by c.client  order by COUNT(c.client)DESC ")
    public List<Object[]> reportClients();

}
