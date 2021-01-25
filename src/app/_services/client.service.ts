import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../_models/classe/Contact/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client: Client[]=[]

  constructor(private _httpClient: HttpClient) { }

  getAllClients():Client[]{
    return this.client;
  }
}
