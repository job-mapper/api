import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
    findAll(): string[] {
        return ['job1', 'job2', 'job3'];
    }
}

