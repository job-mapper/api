import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobEntity } from './job.entity/job.entity';

@Injectable()
export class JobsService {

    constructor(
        @InjectRepository(JobEntity)
        private jobsRepository: Repository<JobEntity>,
    ) { }
    async findAll(): Promise<JobEntity[]> {
        return this.jobsRepository.find();
    }
}

