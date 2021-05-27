import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component'
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginPagesComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
