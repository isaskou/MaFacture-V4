import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/_models/classe/Contact/contact';
import { ContactService } from 'src/app/_services/contact.service';
import { ValidationService } from 'src/app/_services/validation.service';

@Component({
  selector: 'app-cl-new-form',
  templateUrl: './cl-new-form.component.html',
  styleUrls: ['./cl-new-form.component.scss']
})
export class ClNewFormComponent implements OnInit {

  public newClientForm: FormGroup;

  constructor(
    private _builder:FormBuilder,
    private _contactService:ContactService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.newClientForm=this._builder.group({
      prenom:[''],
      nom:[''],
      surnom:[''],
      tel:[''],
      email:['',[Validators.required]],
      rue:[''],
      num:[''],
      codePostal:[''],
      ville:[''],
      pays:[''],
      societe:[''],
      numTVA:['']

    });
  }

  create(){
    const newClient=new Contact();
    let values=this.newClientForm.value
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

    this._contactService.insert(newClient).subscribe({
      next:()=>{
        alert("Client enregistré !");
        console.log("ok")
        this._router.navigateByUrl('/main/client');},
      //next:()=>console.log("ok"),
      error:(error)=>console.log(error)
    });
  }


}
