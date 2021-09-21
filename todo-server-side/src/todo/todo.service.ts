import {
  Injectable,
  Logger,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Like, Repository, Between } from 'typeorm';
import { Status } from '../status/entities/status.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { from, map, Observable } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(
    options: IPaginationOptions,
    email: string,
    title: string,
    status: number,
    category: number,
    from: string,
    to: string,
  ): Promise<Pagination<Todo>> {
    const queryBuilder = this.todoRepository.createQueryBuilder('todo');
    queryBuilder
      .leftJoinAndSelect('todo.status', 'status')
      .leftJoinAndSelect('todo.category', 'category')
      .where('todo.email = :email', { email: email })
      .andWhere(from && to ? 'todo.due BETWEEN :from AND :to' : 'true', {
        from,
        to,
      })
      .andWhere(title ? 'todo.title like :title' : 'true', {
        title: '%' + title + '%',
      })
      .andWhere(status ? 'todo.status like :status' : 'true', {
        status: status,
      })
      .andWhere(category ? 'todo.category like :category' : 'true', {
        category: category,
      })
      .orderBy('todo.id', 'DESC');
    return paginate<Todo>(queryBuilder, options);
  }

  findOne(id: number): Promise<Todo> {
    try {
      return this.todoRepository.findOneOrFail(id);
    } catch (error) {
      throw error;
    }
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    createTodoDto.status = new Status(1, 'Pending');
    return this.todoRepository.save(createTodoDto);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    try {
      const todo = await this.todoRepository.findOneOrFail(id);
      //todo.title = updateTodoDto.title;
      //todo.description = updateTodoDto.description;
      todo.due = updateTodoDto.due;
      //todo.category = updateTodoDto.category;
      todo.status = updateTodoDto.status;
      //todo.email = updateTodoDto.email;
      return this.todoRepository.save(todo);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<Todo> {
    try {
      const todo = await this.todoRepository.findOne(id);
      await this.todoRepository.delete(todo);
      return todo;
    } catch (error) {
      throw error;
    }
  }
}
