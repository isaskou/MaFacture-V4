import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './_components/Main/main.component';
import { CaisseAccueilComponent } from './_components/Pages/caisse/caisse-accueil/caisse-accueil.component';
import { ClientAccueilComponent } from './_components/Pages/client/cl-accueil/client-accueil.component';
import { ClEditComponent } from './_components/Pages/client/cl-edit/cl-edit.component';
import { ClGetOneComponent } from './_components/Pages/client/cl-get-one/cl-get-one.component';
import { ClNewComponent } from './_components/Pages/client/cl-new/cl-new.component';
import { DashboardComponent } from './_components/Pages/dashboard/dashboard.component';
import { FactureComponent } from './_components/Pages/facture/facture.component';
import { FourAccueilComponent } from './_components/Pages/fournisseur/four-accueil/four-accueil.component';
import { Page404Component } from './_components/Pages/page404/page404.component';
import { ParamAccueilComponent } from './_components/Pages/parametres/param-accueil/param-accueil.component';
import { ProdAccueilComponent } from './_components/Pages/produit/prod-accueil/prod-accueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
  {path:'main', redirectTo:'main/dashboard', pathMatch:'full'},
  { path: '404', component: Page404Component },
  // { path: '**', redirectTo: '404' },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'dashboard', component: DashboardComponent },
        {path:'caisse', component:CaisseAccueilComponent},
        { path: 'facture', component: FactureComponent },
        {path:'produit', component:ProdAccueilComponent},
        {path: 'client', component:ClientAccueilComponent},
          {path:'client/new', component:ClNewComponent},
          {path:'client/:id', component:ClGetOneComponent},
          {path:'client/edit/:id', component:ClEditComponent},
        {path:'fournisseur', component:FourAccueilComponent},
        {path:'parametres', component:ParamAccueilComponent},

        
      ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
