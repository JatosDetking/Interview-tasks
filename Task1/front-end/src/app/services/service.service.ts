import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ServiceApiService } from '../api/service-api.service';
import { Service } from 'src/app/interfaces/dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private serviceApiService: ServiceApiService,
  ) { }

  create(name: string, description: string, image: string, startDate: Date, endDate: Date) {
    return this.serviceApiService.create(name, description, image, startDate, endDate).pipe(map((res: any) => {
      return res
    }))
  }
  edit(name: string, description: string, image: string, startDate: Date, endDate: Date, id: string) {
    return this.serviceApiService.edit(name, description, image, startDate, endDate, id).pipe(map((res: any) => {
      return res
    }))
  }
  delete(id: string) {
    return this.serviceApiService.delete(id).pipe(map((res: any) => {
      return res
    }))
  }
  get() {
    return this.serviceApiService.getServices().pipe(map((res: any) => {
      res.forEach((service: any) => {
        service.startDate = new Date(service.startDate)
        service.endDate = new Date(service.endDate)
        service.createdAt = new Date(service.createdAt)
        service.updatedAt = new Date(service.updatedAt)
        
      });
      return res
    }))
  }
}
