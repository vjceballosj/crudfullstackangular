import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit{
  
  id : string ='';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  ngOnInit(): void {
    
  }

}
