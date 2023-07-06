import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { ServiceSchema } from './schemas/service.schemas';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Service',schema: ServiceSchema}]),EventModule],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
