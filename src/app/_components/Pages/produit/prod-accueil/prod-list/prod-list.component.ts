import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
  listeContact: Contact[]=[]


  constructor(
    private _contactService: ContactService,
    private _router:Router

  ) { }

  ngOnInit(): void {
    this.initContactList();
  }

  delete(id:number){
    this._contactService.Delete(id).subscribe({
      next:()=> {
      alert('Client supprimé');
      this.initContactList();
    },
      error:(error)=> alert(error)
    });
  }

  private initContactList(): void{
    this._contactService.getAll().subscribe(
      (data:Contact[]) => this.listeContact=data
    )

  }

}
