import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './schemas/service.schemas';
import * as mongoose from 'mongoose';

@Injectable()
export class ServiceService {
    constructor(
        @InjectModel(Service.name)
        private serviceModel: mongoose.Model<Service>,
      ) {}
    
      async findAll():Promise<Service[]>{
        const service = await this.serviceModel.find();
        return service;
      }
      async create(service: Service): Promise<Service> {
        const res = await this.serviceModel.create(service);
        return res;
      }
      async updateById(id:string, service:Service): Promise<Service>{
        return await this.serviceModel.findByIdAndUpdate(id, service, {
            new:true,
            runValidators:true
        })
      }
      async deleteById(id:string): Promise<Service>{
        return await this.serviceModel.findByIdAndDelete(id)
      }
}
