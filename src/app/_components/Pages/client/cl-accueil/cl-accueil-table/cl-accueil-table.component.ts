import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-accueil-table',
  templateUrl: './cl-accueil-table.component.html',
  styleUrls: ['./cl-accueil-table.component.scss']
})
export class ClAccueilTableComponent implements OnInit {
  clients:Array<any>=[
    {
      id: 1,
      societe:'ISASKOU',
      nom:'Skou',
      prenom:'Isabel',
      adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
    },
    {
      id: 2,
      societe:'SKWeb',
      nom:'Skou',
      prenom:'Isabel',
      adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
    },
    {
      id: 3,
      societe:'test1',
      nom:'Skou',
      prenom:'Isabel',
      adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
    },
    {
      id: 4,
      societe:'Test2',
      nom:'Skou',
      prenom:'Isabel',
      adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
    },
    {
      id: 5,
      societe:'Test3',
      nom:'Skou',
      prenom:'Isabel',
      adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
