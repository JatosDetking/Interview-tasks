import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventApiService } from '../api/event-api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(
    private eventApiService: EventApiService,
  ) { }

  create(name: string, serviceId: string, startDate: Date, endDate: Date) {
    return this.eventApiService.create(name, serviceId, startDate, endDate).pipe(map((res: any) => {
      return res
    }))
  }
  get() {
    return this.eventApiService.getEvents().pipe(map((res: any) => {
      return res
    }))
  }
  updateStatus(status: string, id: string,) {
    return this.eventApiService.edit(status,id).pipe(map((res: any) => {
      return res
    }))
  }
}
