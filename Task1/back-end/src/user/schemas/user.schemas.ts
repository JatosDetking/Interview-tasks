import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class User {
    @Prop({ unique: true })
    username: string;
    @Prop()
    password: string;
    @Prop()
    role: string;
}
export const UserSchema = SchemaFactory.createForClass(User)