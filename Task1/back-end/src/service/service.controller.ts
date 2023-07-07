import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Service } from './schemas/service.schemas';
import { ServiceService } from './service.service';
import { Response, Request } from 'express';
import { EventService } from 'src/event/event.service';

@Controller('service')
export class ServiceController {
    constructor(private serviceService: ServiceService, private eventService: EventService) { }

    @Get()
    async getAllUService(
        @Req() req: Request,
    ): Promise<Service[]> {
        if (req['user'].role === 'admin') {
            return this.serviceService.findAll();
        } else if (req['user'].role === 'user') {
            const allServices: any = await this.serviceService.findAll();
            const myEvent = await this.eventService.findAll(req['user']);
            const oderService = [];
            const newDate = new Date(Date.now());
            allServices.forEach(service => {
                if (!myEvent.some(myEvent => myEvent.serviceId == service._id)) {
                    const date = new Date(service.endDate);
                    if (newDate.getTime() < date.getTime()) {
                        oderService.push(service);
                    }
                }
            });
            return oderService;
        }
    }

    @Post()
    async createService(
        @Req() req: Request,
        @Res() res: Response,
        @Body() service: Service,
    ): Promise<Response> {
        if (req['user'].role == 'admin') {
            service.startDate = service.startDate;
            service.endDate = service.endDate;
            this.serviceService.create(service);
            return res.status(HttpStatus.CREATED).json({ status: 'Ready' });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ status: 'denied' });
        }
    }

    @Put(':id')
    async updateService(
        @Req() req: Request,
        @Res() res: Response,
        @Param('id')
        id,
        @Body()
        service,
    ): Promise<Response> {
        if (req['user'].role == 'admin') {
            service.startDate = service.startDate;
            service.endDate = service.endDate;
            this.serviceService.updateById(id, service);
            return res.status(HttpStatus.OK).json({ status: 'Ready' });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ status: 'denied' });
        }
    }
    @Delete(':id')
    async deleteService(
        @Req() req: Request,
        @Res() res: Response,
        @Param('id')
        id,
    ): Promise<Response> {
        if (req['user'].role == 'admin') {
            this.serviceService.deleteById(id);
            return res.status(HttpStatus.NO_CONTENT).json({ status: 'Ready' });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ status: 'denied' });
        }
    }
}
