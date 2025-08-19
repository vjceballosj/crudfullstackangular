import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit{
  
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private customerService : CustomerService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  addCustomer(){

    const customer: Customer = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email
    };

    //let customer = new Customer(0, this.firstName, this.lastName, this.email);
    //console.log(customer);
    this.customerService.createCustomer(customer).subscribe({
      next: res => {
        //console.log("Customer Creado", res);
        alert('✅ Creado correctamente');
        this.router.navigate(['/customers']);
      },
      error: err => {
        //console.log("Error al crear el customer", err);
        console.error(err);
        alert('❌ Error al crear el Customer');
      }
    });
  }
  goBack() {
    this.router.navigate(['/customers']); // acción del botón volver
  }
}
