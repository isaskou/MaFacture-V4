import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryPickerService, ICountry } from 'ngx-country-picker';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/_services/client.service';
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
    private _client:ClientService
  ) {}

  ngOnInit(): void {
    this.newClientForm=this._builder.group({
      Prenom:['',[Validators.minLength(3)]],
      Nom:[''],
      Surnom:[''],
      Tel:[''],
      Email:['',[Validators.required], [ValidationService.emailValidator]],
      Rue:[''],
      Num:[''],
      CodePostal:[''],
      Ville:[''],
      Pays:[''],
      Societe:[''],
      NumTVA:['']

    });
  }

  saveContact(): void {
    console.log(this.newClientForm.value);
  }


}
