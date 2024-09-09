import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobEntity } from './job.entity/job.entity';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Get()
    async findAll(): Promise<JobEntity[]> {
        return this.jobsService.findAll();
    }
}