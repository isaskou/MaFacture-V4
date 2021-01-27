import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Contact } from '../_models/classe/Contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url:string='https://localhost:44373/api/Contacts'
  client: Contact[]=[]

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
    ) { }

  getAll():Observable<Contact[]>{
    return this._httpClient.get<Contact[]>(this.url)
  }

  insert(c:Contact):Observable<number>{
    return this._httpClient.post<number>(this.url, c)
  }

  GetOne(id:number): Observable<Contact> {
    return this._httpClient.get<Contact>(this.url +'/'+ id)
  }

  Delete(id:number):Observable<number>{
    return this._httpClient.delete<number>(this.url +'/'+ id)
  }

  Update(c:Contact):Observable<Contact>{
    return this._httpClient.put<Contact>(this.url+'/'+c.contactId, c)
  }
}
