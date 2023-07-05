import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './schemas/event.schemas';
import * as mongoose from 'mongoose';
@Injectable()
export class EventService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: mongoose.Model<Event>,
    ) { }

    async findAll(): Promise<Event[]> {
        const event = await this.eventModel.find();
        return event;
    }
    async create(event: Event): Promise<Event> {
        const res = await this.eventModel.create(event);
        return res;
    }
    async updateById(id: string, event: Event): Promise<Event> {
        return await this.eventModel.findByIdAndUpdate(id, event, {
            new: true,
            runValidators: true
        })
    }
}
