import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Service } from './schemas/service.schemas';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
    constructor(private serviceService: ServiceService) { }

    @Get()
    async getAllUService(): Promise<Service[]> {
        return this.serviceService.findAll();
    }

    @Post()
    async createService(
        @Body()
        service
    ): Promise<Service> {
        service.startDate = new Date(service.startDate);
        service.endDate = new Date(service.endDate);
        return this.serviceService.create(service)
    }

    @Put(':id')
    async updateService(
        @Param('id')
        id,
        @Body()
        service,
    ): Promise<Service> {
        service.startDate = new Date(service.startDate);
        service.endDate = new Date(service.endDate);
        return this.serviceService.updateById(id, service);
    }
    @Delete(':id')
    async deleteService(
        @Param('id')
        id,
    ): Promise<Service> {
        return this.serviceService.deleteById(id);
    }
}
