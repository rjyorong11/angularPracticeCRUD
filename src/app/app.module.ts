import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_helpers/counter.reducer'
import { marginModification } from './_helpers/margin-realtime/margin.reducer'
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';
import { TableComponent } from './components/table/table.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { UserChooseComponent } from './pages/user-choose/user-choose.component';
import { ViewBusDetailsComponent } from './pages/view-bus-details/view-bus-details.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPagesComponent,
    SidebarComponent,
    AddNewUserComponent,
    TableComponent,
    LayoutComponent,
    UserChooseComponent,
    ViewBusDetailsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, id: marginModification})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
