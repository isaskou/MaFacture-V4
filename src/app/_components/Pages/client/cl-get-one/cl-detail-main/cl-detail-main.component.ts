import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-cl-detail-main',
  templateUrl: './cl-detail-main.component.html',
  styleUrls: ['./cl-detail-main.component.scss']
})
export class ClDetailMainComponent implements OnInit {
  currentContact: Contact;

  constructor(
    private _contactService: ContactService,
    private _activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this._contactService.GetOne(this._activatedRoute.snapshot.params["id"])
      .subscribe((contact: Contact) => this.currentContact = contact)

  }

}
