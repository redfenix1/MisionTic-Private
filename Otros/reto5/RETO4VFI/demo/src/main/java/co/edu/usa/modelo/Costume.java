/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
//import org.hibernate.annotations.Table;
//import org.springframework.data.relational.core.mapping.Table;


/**
 *
 * @author JaliNet
 */
@Entity
@Table(name="costume")
public class Costume implements Serializable {
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer idCostume;
    private String name;
    private String brand;
    private String description;
    private Integer year_b;

    @ManyToOne
    @JoinColumn(name="idCategory")
    @JsonIgnoreProperties("costumes")
    private Category category;

    public Integer getIdCostume() {
        return idCostume;
    }

    public void setIdCostume(Integer idCostume) {
        this.idCostume = idCostume;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getYear() {
        return year_b;
    }

    public void setYear(Integer year) {
        this.year_b = year;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    
}
