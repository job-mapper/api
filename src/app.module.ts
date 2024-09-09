import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';

@Module({
  imports: [],
  controllers: [AppController, JobsController],
  providers: [AppService, JobsService],
})
export class AppModule { }
