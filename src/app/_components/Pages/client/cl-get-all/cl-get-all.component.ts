import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-cl-get-all',
  templateUrl: './cl-get-all.component.html',
  styleUrls: ['./cl-get-all.component.scss']
})
export class ClGetAllComponent implements OnInit {
  listeContact: Contact[]=[];

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
