import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component'
import { AuthGuard } from './_helpers/auth.guard';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component'
import { UserChooseComponent } from './pages/user-choose/user-choose.component';
import { ViewBusDetailsComponent } from './pages/view-bus-details/view-bus-details.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';


const routes: Routes = [
  { path: '', redirectTo: 'choose-user', pathMatch: 'full' },
  { path: 'choose-user', component: UserChooseComponent },
  { path: 'login/:type', component: LoginPagesComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'bus-details/:id', component: ViewBusDetailsComponent, canActivate: [AuthGuard] },
  { path: 'add-new-user', component: AddNewUserComponent, canActivate: [AuthGuard] },  
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
