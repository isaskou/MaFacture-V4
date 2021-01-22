import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/Layout/navbar/navbar.component';
import { SidebarComponent } from './_components/Layout/sidebar/sidebar.component';
import { DropdownComponent } from './_components/Layout/dropdown/dropdown.component';
import { DashboardComponent } from './_components/Pages/dashboard/dashboard.component';
import { CaisseComponent } from './_components/Pages/caisse/caisse.component';
import { FactureComponent } from './_components/Pages/facture/facture.component';
import { FcTitleComponent } from './_components/Pages/facture/fc-content/fc-title/fc-title.component';
import { DcTitleComponent } from './_components/Pages/dashboard/dc-content/dc-title/dc-title.component';
import { DcButtonComponent } from './_components/Pages/dashboard/dc-content/dc-button/dc-button.component';
import { DcTableComponent } from './_components/Pages/dashboard/dc-content/dc-table/dc-table.component';
import { FcButtonComponent } from './_components/Pages/facture/fc-content/fc-button/fc-button.component';
import { FcGetAllComponent } from './_components/Pages/facture/fc-content/fc-get-all/fc-get-all.component';
import { MainComponent } from './_components/Main/main.component';

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
    FcGetAllComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
