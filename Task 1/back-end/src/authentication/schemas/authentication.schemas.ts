import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class Authentication {
    @Prop()
    userId: string;
    @Prop()
    token: string;
    @Prop()
    expiryDate: Date;
}
export const AuthenticationSchema = SchemaFactory.createForClass(Authentication)