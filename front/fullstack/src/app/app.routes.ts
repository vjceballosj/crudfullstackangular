import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

export const routes: Routes = [
   { path: '', redirectTo: 'customers', pathMatch: 'full' },
   { path: 'customers', component: CustomerListComponent }, //Cuando el usuario ponga hhtp://localhost:4200
   { path: 'customers/add', component: CustomerAddComponent } //Cuando el usuario ponga http://localhost:4200/customers/add
];
