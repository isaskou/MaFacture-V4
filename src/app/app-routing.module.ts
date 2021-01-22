import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_components/Main/main.component';
import { ClientComponent } from './_components/Pages/client/client.component';
import { DashboardComponent } from './_components/Pages/dashboard/dashboard.component';
import { FactureComponent } from './_components/Pages/facture/facture.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
  {path:'main', redirectTo:'main/dashboard', pathMatch:'full'},
  {
    path: 'main', component: MainComponent, children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'facture', component: FactureComponent },
        {path: 'client', component:ClientComponent}
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
