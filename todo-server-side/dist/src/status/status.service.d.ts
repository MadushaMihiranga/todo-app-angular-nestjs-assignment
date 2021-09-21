import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';
export declare class StatusService {
    private statusRepository;
    constructor(statusRepository: Repository<Status>);
    findAll(): Promise<Status[]>;
    findOne(id: number): Promise<Status>;
}
