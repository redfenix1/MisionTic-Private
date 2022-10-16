package com.usa.misiontic.reto4.repository;

import com.usa.misiontic.reto4.entities.Score;
import com.usa.misiontic.reto4.repository.crudRepository.ScoreCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository ScoreCrudRepository;

    public List<Score> getAll(){
        return (List<Score>) ScoreCrudRepository.findAll();
    }

    public Optional<Score> getScore(int id){
        return ScoreCrudRepository.findById(id);
    }

    public Score save(Score c){
        return ScoreCrudRepository.save(c);
    }

    public void delete(Score c){
        ScoreCrudRepository.delete(c);
    }
}
