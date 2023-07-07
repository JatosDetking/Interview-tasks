import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetToken, VerifyToken } from './authentication.middleware';
import { AuthenticationService } from './authentication.service';
import { AuthenticationSchema } from './schemas/authentication.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Authentication',schema: AuthenticationSchema}])],
  providers: [AuthenticationService,GetToken,VerifyToken],
  exports:[AuthenticationService,GetToken,VerifyToken]
})
export class AuthenticationModule {}
