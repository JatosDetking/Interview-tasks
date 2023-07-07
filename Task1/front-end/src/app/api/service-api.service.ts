import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { databaseURL } from './env';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(
    private http: HttpClient
  ) { }

  getServices() {
    return this.http.get(`${databaseURL}/service/`)
  }
  create(name: string, description: string, image: string, startDate: Date, endDate: Date) {
    return this.http.post(`${databaseURL}/service/`,
      { name, description, image, startDate, endDate }
    )
  }
  edit(name: string, description: string, image: string, startDate: Date, endDate: Date, id: string) {
    return this.http.put(`${databaseURL}/service/`+id,
      {name, description, image, startDate, endDate }
    )
  } 
  delete(id: string) {
    return this.http.delete(`${databaseURL}/service/`+id)
  }
}
