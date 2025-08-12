package com.valentodev.crud_fullstack_angular.service;

import com.valentodev.crud_fullstack_angular.entity.Customer;

import java.util.List;

public interface CustomerService {

    Customer save (Customer customer);
    List<Customer> findAll();
    Customer finById (Integer id);
    void deleteById (Integer id);
    Customer update(Customer customer);
}
