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

    async findAll(user: any): Promise<Event[]> {
        let events = [];
        if (user.role === 'user') {
            events = await this.eventModel.find({ userId: user.id });
        } else if (user.role === 'admin') {
            events = await this.eventModel.find();
        }
        return events;
    }
    async create(event: Event): Promise<Event> {
        const res = await this.eventModel.create(event);
        return res;
    }
    async updateById(id: string, status: string): Promise<Event> {
        return await this.eventModel.findOneAndUpdate(
            { _id: id },
            { status: status },
            { new: true, runValidators: true }
        ).exec();
    }
    
}
