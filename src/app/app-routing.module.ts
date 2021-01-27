import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_components/Main/main.component';
import { ClientAccueilComponent } from './_components/Pages/client/cl-accueil/client-accueil.component';
import { ClEditComponent } from './_components/Pages/client/cl-edit/cl-edit.component';
import { ClGetOneComponent } from './_components/Pages/client/cl-get-one/cl-get-one.component';
import { ClNewComponent } from './_components/Pages/client/cl-new/cl-new.component';
import { DashboardComponent } from './_components/Pages/dashboard/dashboard.component';
import { FactureComponent } from './_components/Pages/facture/facture.component';
import { Page404Component } from './_components/Pages/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
  {path:'main', redirectTo:'main/dashboard', pathMatch:'full'},
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'facture', component: FactureComponent },
        {path: 'client', component:ClientAccueilComponent},
        {path:'client/new', component:ClNewComponent},
        {path:'client/:id', component:ClGetOneComponent},
        {path:'client/edit/:id', component:ClEditComponent}
        
      ]
  },
  // {path:'dashboard', component:DcMenuComponent},
  // {path:'caisse', component:AppComponent},
  // {path:'facture', component:FcMenuComponent},
  // {path:'produit', component:AppComponent},
  // {path:'client', component:AppComponent},
  // {path:'fournisseur', component:AppComponent},
  // {path:'paramètres', component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
