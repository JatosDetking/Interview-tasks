import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from './service/service.module';
import { EventModule } from './event/event.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { GetToken, VerifyToken } from './authentication/authentication.middleware';
import { GetUser } from './user/user.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    ServiceModule,
    EventModule,
    AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(GetToken,VerifyToken,GetUser)
        .exclude('users/login','users/register')
        .forRoutes('*');
}
}
