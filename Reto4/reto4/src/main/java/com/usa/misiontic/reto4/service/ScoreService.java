package com.usa.misiontic.reto4.service;

import com.usa.misiontic.reto4.entities.Score;
import com.usa.misiontic.reto4.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository ScoreRepository;

    public List<Score> getAll(){
        return ScoreRepository.getAll();
    }

    public Optional<Score> getScore(int id){
        return ScoreRepository.getScore(id);
    }

    public Score save(Score s){
        if(s.getIdScore() == null){
            return ScoreRepository.save(s);
        }else{
            Optional<Score> tmp = ScoreRepository.getScore(s.getIdScore());
            if(tmp.isEmpty()){
                return ScoreRepository.save(s);
            }else{
                return s;
            }
        }
    }

    public Score update(Score s){
        if(s.getIdScore() != null){
            Optional<Score> tmp = ScoreRepository.getScore(s.getIdScore());
            if(!tmp.isEmpty()){
                if(s.getScoreVal() != null){
                    tmp.get().setScoreVal(s.getScoreVal());
                }
                if(s.getMessageText() != null){
                    tmp.get().setMessageText(s.getMessageText());
                }
                ScoreRepository.save(tmp.get());
                return tmp.get();
            }else{
                return s;
            }
        }else{
            return s;
        }
    }

    public boolean delete(int id){
        boolean flag = false;
        Optional<Score> c = ScoreRepository.getScore(id);
        if(c.isPresent()){
            ScoreRepository.delete(c.get());
            flag = true;
        }
        return flag;
    }
}
