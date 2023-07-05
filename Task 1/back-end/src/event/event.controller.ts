import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './schemas/event.schemas';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) { }

    @Get()
    async getAllEvents(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Post()
    async createEvent(
        @Body()
        service
    ): Promise<Event> {
        service.startDate = new Date(service.startDate);
        service.endDate = new Date(service.endDate);
        return this.eventService.create(service)
    }

    @Put(':id')
    async updateEventStatus(
        @Param('id')
        id,
        @Body()
        service,
    ): Promise<Event> {
        return this.eventService.updateById(id, service);
    }
}
