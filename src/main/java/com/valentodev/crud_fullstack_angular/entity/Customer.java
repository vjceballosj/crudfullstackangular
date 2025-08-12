package com.valentodev.crud_fullstack_angular.entity;


import jakarta.persistence.*;

@Entity
@Table(name="customers") //Opcional, para nombrar el nombre de la tabla de forma personalizada
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    //@Column("nombres") de igual manera con este ejemplo podría personalizar el nombre cada columna
    private String firstName;
    private String lastName;
    @Column(unique = true, nullable = false) // Debe ser único y no puede ser nullo
    private String email;

    public Customer() {
    }

    public Customer(Integer id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
