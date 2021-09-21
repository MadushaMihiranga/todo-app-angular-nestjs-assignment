import { Injectable } from '@nestjs/common';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateStatusDto } from './dto/create-status.dto';
//import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  findAll(): Promise<Status[]> {
    try {
      return this.statusRepository.find();
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number): Promise<Status> {
    try {
      return this.statusRepository.findOneOrFail(id);
    } catch (error) {
      throw error;
    }
  }

  /*create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }*/
}
