import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from '../_models/interface/Contact/i-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client: IClient[]=[]

  constructor(private _httpClient: HttpClient) { }

  getAllClients():IClient[]{
    return this.client;
  }
}
