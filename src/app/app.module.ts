import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/Layout/navbar/navbar.component';
import { SidebarComponent } from './_components/Layout/sidebar/sidebar.component';
import { DropdownComponent } from './_components/Layout/dropdown/dropdown.component';
import { DashboardComponent } from './_components/Pages/dashboard/dashboard.component';
import { CaisseComponent } from './_components/Pages/caisse/caisse.component';
import { FactureComponent } from './_components/Pages/facture/facture.component';
import { FcTitleComponent } from './_components/Pages/facture/fc-accueil/fc-title/fc-title.component';
import { DcTitleComponent } from './_components/Pages/dashboard/dc-content/dc-title/dc-title.component';
import { DcButtonComponent } from './_components/Pages/dashboard/dc-content/dc-button/dc-button.component';
import { DcTableComponent } from './_components/Pages/dashboard/dc-content/dc-table/dc-table.component';
import { FcButtonComponent } from './_components/Pages/facture/fc-accueil/fc-button/fc-button.component';
import { FcTableComponent } from './_components/Pages/facture/fc-accueil/fc-table/fc-table.component';
import { MainComponent } from './_components/Main/main.component';
import { ClientComponent } from './_components/Pages/client/client.component';
import { ClAccueilTitleComponent } from './_components/Pages/client/cl-accueil/cl-accueil-title/cl-accueil-title.component';
import { ClAccueilButtonComponent } from './_components/Pages/client/cl-accueil/cl-accueil-button/cl-accueil-button.component';
import { ClAccueilTableComponent } from './_components/Pages/client/cl-accueil/cl-accueil-table/cl-accueil-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    DashboardComponent,
    CaisseComponent,
    FactureComponent,
    FcTitleComponent,
    DcTitleComponent,
    DcButtonComponent,
    DcTableComponent,
    FcButtonComponent,
    FcTableComponent,
    MainComponent,
    ClientComponent,
    ClAccueilTitleComponent,
    ClAccueilButtonComponent,
    ClAccueilTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
