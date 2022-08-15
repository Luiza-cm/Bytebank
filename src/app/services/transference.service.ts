import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private transfererList: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.transfererList = [];
  }

  get transferences() {
    return this.transfererList;
  }

  showAll(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(transference: Transferencia): Observable<Transferencia>{
    this.resources(transference);
    return this.httpClient.post<Transferencia>(this.url, transference);
  }

  private resources(transference: any){
    transference.data = new Date();

  }

}
