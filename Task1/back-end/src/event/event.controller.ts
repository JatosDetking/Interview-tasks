import { Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './schemas/event.schemas';
import { Response, Request } from 'express';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) { }

    @Get()
    async getAllEvents(
        @Req() req: Request,
    ): Promise<Event[]> {
        return this.eventService.findAll(req['user']);
    }
    @Post()
    async createEvent(
        @Req() req: Request,
        @Res() res: Response,
        @Body()
        event
    ): Promise<Response> {
        if (req['user'].role == 'user') {
            event.userId = req['user'].id;
            event.status = 'pending';
            this.eventService.create(event);
            return res.status(HttpStatus.CREATED).json({ status: 'Ready' });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ status: 'denied' });
        }
    }

    @Put(':id')
    async updateEventStatus(
        @Req() req: Request,
        @Res() res: Response,
        @Param('id')
        id,
        @Body()
        status,
    ): Promise<Response> {
        if (req['user'].role == 'admin') {
            this.eventService.updateById(id, status.status);
            return res.status(HttpStatus.OK).json({ status: 'Ready' });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ status: 'denied' });
        }
    } 
}
