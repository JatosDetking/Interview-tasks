import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class Service {
    @Prop()
    name: string;
    @Prop()
    image: string;
    @Prop()
    description: string;
    @Prop()
    startDate: Date;
    @Prop()
    endDate: Date;
}
export const ServiceSchema = SchemaFactory.createForClass(Service)