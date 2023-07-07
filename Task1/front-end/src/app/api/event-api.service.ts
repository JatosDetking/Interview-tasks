import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { databaseURL } from './env';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents() {
    return this.http.get(`${databaseURL}/event/`)
  }
  create(name: string, serviceId: string, startDate: Date, endDate: Date) {
    return this.http.post(`${databaseURL}/event/`,
      { name, serviceId, startDate, endDate }
    )
  }
  edit(status: string, id: string) {
    return this.http.put(`${databaseURL}/event/`+id,
      {status}
    )
  } 
}
