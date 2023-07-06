import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class Event {
    @Prop()
    name:string;
    @Prop()
    userId: string;
    @Prop()
    serviceId: string;
    @Prop()
    status: string;
    @Prop()
    startDate: Date;
    @Prop()
    endDate: Date;
}
export const EventSchema = SchemaFactory.createForClass(Event)