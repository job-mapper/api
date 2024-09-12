import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEntity } from './jobs/job.entity/job.entity'; // Import your Job entity
import { JobsModule } from './jobs/jobs.module'; // Import Jobs module


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'database-1.ctmeg0eqc4g3.eu-north-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'sakatards',
      database: 'innodb',
      entities: [JobEntity], // Add your entity here	
      synchronize: true, // set to false in production
    }),
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
