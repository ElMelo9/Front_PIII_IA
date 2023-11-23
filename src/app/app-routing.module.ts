import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GuardService } from './services/guard.service';
import { GocolabComponent } from './components/gocolab/gocolab.component';
import { FormComponent } from './components/form/form.component';
import { ExportPdfComponent } from './components/export-pdf/export-pdf.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent,canActivate: [GuardService]},
  {path: 'home', component:HomeComponent,canActivate: [GuardService]},
  {path: 'gocolab',component:GocolabComponent,canActivate: [GuardService]},
  {path: 'form', component:FormComponent,canActivate: [GuardService]},
  {path: 'export',component:ExportPdfComponent,canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
