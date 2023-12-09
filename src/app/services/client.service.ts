import { Injectable } from '@angular/core';
import { clientRequest } from './clientRequest';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:8080/client'

  constructor( private http:HttpClient) { }

  addClient(client:clientRequest){
    this.http.post(this.url, {
      params: new HttpParams().set('name', client.name)
    })
  }

  getClients():Observable<any>{
    return this.http.get('../../assets/data.json');
  }
}
