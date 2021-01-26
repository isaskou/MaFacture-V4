import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-cl-accueil-table',
  templateUrl: './cl-accueil-table.component.html',
  styleUrls: ['./cl-accueil-table.component.scss']
})
export class ClAccueilTableComponent implements OnInit {
  listeContact: Contact[]=[]
  // clients:Array<any>=[
  //   {
  //     id: 1,
  //     societe:'ISASKOU',
  //     nom:'Skou',
  //     prenom:'Isabel',
  //     adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
  //   },
  //   {
  //     id: 2,
  //     societe:'SKWeb',
  //     nom:'Skou',
  //     prenom:'Isabel',
  //     adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
  //   },
  //   {
  //     id: 3,
  //     societe:'test1',
  //     nom:'Skou',
  //     prenom:'Isabel',
  //     adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
  //   },
  //   {
  //     id: 4,
  //     societe:'Test2',
  //     nom:'Skou',
  //     prenom:'Isabel',
  //     adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
  //   },
  //   {
  //     id: 5,
  //     societe:'Test3',
  //     nom:'Skou',
  //     prenom:'Isabel',
  //     adresse:'Rue Vanderkinder 536 - 1180 Bruxelles'
  //   }

  // ]

  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit(): void {
    this._contactService.getAll().subscribe(
      (data:Contact[]) => this.listeContact=data
    )
  }

  delete(id:number){
    this._contactService.Delete(id);
  }

}
