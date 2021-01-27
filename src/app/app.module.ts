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
import { FactureComponent } from './_components/Pages/facture/facture.component';
import { FcTitleComponent } from './_components/Pages/facture/fc-accueil/fc-title/fc-title.component';
import { DcTitleComponent } from './_components/Pages/dashboard/dc-content/dc-title/dc-title.component';
import { DcButtonComponent } from './_components/Pages/dashboard/dc-content/dc-button/dc-button.component';
import { DcTableComponent } from './_components/Pages/dashboard/dc-content/dc-table/dc-table.component';
import { FcButtonComponent } from './_components/Pages/facture/fc-accueil/fc-button/fc-button.component';
import { FcTableComponent } from './_components/Pages/facture/fc-accueil/fc-table/fc-table.component';
import { MainComponent } from './_components/Main/main.component';
import { ClientAccueilComponent } from './_components/Pages/client/cl-accueil/client-accueil.component';
import { ClAccueilTitleComponent } from './_components/Pages/client/cl-accueil/cl-accueil-title/cl-accueil-title.component';
import { ClAccueilButtonComponent } from './_components/Pages/client/cl-accueil/cl-accueil-button/cl-accueil-button.component';
import { ClAccueilTableComponent } from './_components/Pages/client/cl-accueil/cl-accueil-table/cl-accueil-table.component';
import { ClNewComponent } from './_components/Pages/client/cl-new/cl-new.component';
import { ClNewTitleComponent } from './_components/Pages/client/cl-new/cl-new-title/cl-new-title.component';
import { ClNewFormComponent } from './_components/Pages/client/cl-new/cl-new-form/cl-new-form.component';
import { ClGetOneComponent } from './_components/Pages/client/cl-get-one/cl-get-one.component';
import { ClDetailTitleComponent } from './_components/Pages/client/cl-get-one/cl-detail-title/cl-detail-title.component';
import { ClDetailMainComponent } from './_components/Pages/client/cl-get-one/cl-detail-main/cl-detail-main.component';
import { ClEditComponent } from './_components/Pages/client/cl-edit/cl-edit.component';
import { ClEditTitleComponent } from './_components/Pages/client/cl-edit/cl-edit-title/cl-edit-title.component';
import { ClEditFormComponent } from './_components/Pages/client/cl-edit/cl-edit-form/cl-edit-form.component';
import { Page404Component } from './_components/Pages/page404/page404.component';
import { CaisseTitleComponent } from './_components/Pages/caisse/caisse-accueil/caisse-title/caisse-title.component';
import { ProdTitleComponent } from './_components/Pages/produit/prod-accueil/prod-title/prod-title.component';
import { FourTitleComponent } from './_components/Pages/fournisseur/four-accueil/four-title/four-title.component';
import { ParamTitleComponent } from './_components/Pages/parametres/param-accueil/param-title/param-title.component';
import { ParamAccueilComponent } from './_components/Pages/parametres/param-accueil/param-accueil.component';
import { FourAccueilComponent } from './_components/Pages/fournisseur/four-accueil/four-accueil.component';
import { CaisseAccueilComponent } from './_components/Pages/caisse/caisse-accueil/caisse-accueil.component';
import { ProdAccueilComponent } from './_components/Pages/produit/prod-accueil/prod-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    DashboardComponent,
    FactureComponent,
    FcTitleComponent,
    DcTitleComponent,
    DcButtonComponent,
    DcTableComponent,
    FcButtonComponent,
    FcTableComponent,
    MainComponent,
    ClientAccueilComponent,
    ClAccueilTitleComponent,
    ClAccueilButtonComponent,
    ClAccueilTableComponent,
    ClNewComponent,
    ClNewTitleComponent,
    ClNewFormComponent,
    ClGetOneComponent,
    ClDetailTitleComponent,
    ClDetailMainComponent,
    ClEditComponent,
    ClEditTitleComponent,
    ClEditFormComponent,
    Page404Component,
    CaisseTitleComponent,
    ProdTitleComponent,
    FourTitleComponent,
    ParamTitleComponent,
    ParamAccueilComponent,
    FourAccueilComponent,
    CaisseAccueilComponent,
    ProdAccueilComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
