import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-four-list',
  templateUrl: './four-list.component.html',
  styleUrls: ['./four-list.component.scss']
})
export class FourListComponent implements OnInit {
  listeContact: Contact[]=[]

  constructor(
    private _contactService: ContactService,
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
