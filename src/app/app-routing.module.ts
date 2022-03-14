import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SiginupComponent } from './siginup/siginup.component';

const routes: Routes = [
  {path : '', redirectTo : 'home' , pathMatch:'full'},
  {path : 'home', component:HomeComponent},
  {path : 'login',component:LoginComponent},
  {path : 'signup', component:SiginupComponent},
  {path : 'dashboard', component:DashboardComponent , canActivate:[AuthGuard]},
  {path : '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
