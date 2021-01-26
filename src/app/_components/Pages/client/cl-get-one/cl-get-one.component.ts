import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-cl-get-one',
  templateUrl: './cl-get-one.component.html',
  styleUrls: ['./cl-get-one.component.scss']
})
export class ClGetOneComponent implements OnInit {

  currentContact : Contact;

  constructor(
    private _contactService:ContactService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._contactService.GetOne(this._activatedRoute.snapshot.params["id"]).subscribe(
      (data : Contact) => this.currentContact = data
    )

   }

}
