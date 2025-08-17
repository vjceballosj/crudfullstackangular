import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
//import { EjemploComponent } from './app/ejemplo/ejemplo.component';
import { CustomerListComponent } from './app/components/customer-list/customer-list.component';

//bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(CustomerListComponent, appConfig)
  .catch((err) => console.error(err));
