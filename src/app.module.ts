import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEntity } from './jobs/job.entity/job.entity'; // Import your Job entity
import { JobsModule } from './jobs/jobs.module'; // Import Jobs module


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'my-secret-pw',
      database: 'job_mapper',
      entities: [JobEntity], // Add your entity here	
      synchronize: true, // set to false in production
    }),
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
