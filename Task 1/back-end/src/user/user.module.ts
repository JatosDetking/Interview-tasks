import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetToken, GetUserId, VerifyToken } from 'src/authentication/authentication.middleware';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { UserSchema } from './schemas/user.schemas';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), AuthenticationModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule{}
