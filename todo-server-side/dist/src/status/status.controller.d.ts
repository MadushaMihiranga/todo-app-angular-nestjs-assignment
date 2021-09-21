import { StatusService } from './status.service';
import { Status } from './entities/status.entity';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    findAll(): Promise<Status[]>;
    findOne(id: string): Promise<Status>;
}
