import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  
  customers : Customer [] = [];
  
  constructor(private customerService : CustomerService){}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(){
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
      }
    );
  }

  deleteCustomer(id : number){
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      ()=> this.listCustomers()
    );
  }
}
