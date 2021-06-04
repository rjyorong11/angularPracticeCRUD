import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_helpers/counter.reducer'
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewUsersDataComponent } from './components/view-users-data/view-users-data.component';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPagesComponent,
    SidebarComponent,
    ViewUsersDataComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
