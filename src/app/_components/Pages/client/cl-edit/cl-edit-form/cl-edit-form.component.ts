import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-cl-edit-form',
  templateUrl: './cl-edit-form.component.html',
  styleUrls: ['./cl-edit-form.component.scss']
})
export class ClEditFormComponent implements OnInit {
  currentContact: Contact;
  editForm: FormGroup;

  constructor(
    private _contactService : ContactService,
    private _builder:FormBuilder,
    private _activatedRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._contactService.GetOne(this._activatedRoute.snapshot.params['id'])
      .subscribe(
        (contact:Contact) => {
          this.currentContact = contact
          this.formInit()
        }
      )
  }
  formInit() {
    this.editForm=this._builder.group({
      prenom:[this.currentContact.prenom],
      nom:[this.currentContact.nom],
      surnom:[this.currentContact.surnom],
      tel:[this.currentContact.tel],
      email:[this.currentContact.email,[Validators.required]],
      rue:[this.currentContact.rue],
      num:[this.currentContact.num],
      codePostal:[this.currentContact.codePostal],
      ville:[this.currentContact.ville],
      pays:[this.currentContact.pays],
      societe:[this.currentContact.societe],
      numTVA:[this.currentContact.numTVA]
    })
  }

  Update(){
    const newClient= new Contact();
    let values= this.editForm.value;
    newClient.contactId=this.currentContact.contactId;
    newClient.prenom=values["prenom"]
    newClient.nom=values["nom"]
    newClient.surnom=values["surnom"]
    newClient.email=values["email"]
    newClient.tel=values["tel"]
    newClient.rue=values["rue"]
    newClient.num=values["num"]
    newClient.codePostal=values["codePostal"]
    newClient.ville=values["ville"]
    newClient.pays=values["pays"]
    newClient.societe=values["societe"]
    newClient.numTVA=values["numTva"]

    this._contactService.Update(newClient).subscribe({
      next:()=>{
        alert("Client modifié ! ");
        this._router.navigateByUrl('/main/client');},
      error: (error)=> alert(error)
    })

  }

}
