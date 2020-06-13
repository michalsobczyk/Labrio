import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FindingsComponent } from './findings/findings.component';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'findings', component: FindingsComponent },
  { path: 'informations', component: InformationsComponent},
  { path: '**', redirectTo: '' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
