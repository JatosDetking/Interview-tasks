import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class Event {
    @Prop()
    userId: string;
    @Prop()
    serviceId: string;
    @Prop()
    status: string;

    
}
export const EventSchema = SchemaFactory.createForClass(Event)