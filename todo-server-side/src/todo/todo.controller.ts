import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { PaginationTodoDto } from './dto/pagination-todo-dto';

@ApiTags('Todo List')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOkResponse({ type: PaginationTodoDto, isArray: false })
  @ApiQuery({ name: 'page', required: true })
  @ApiQuery({ name: 'limit', required: true })
  @ApiQuery({ name: 'email', required: true })
  @ApiQuery({ name: 'title', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  @Get('/findall')
  async search(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('email') email: string,
    @Query('title') title: string,
    @Query('status') status: number,
    @Query('category') category: number,
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<Pagination<Todo>> {
    limit = limit > 100 ? 100 : limit;
    return this.todoService.findAll(
      { page, limit },
      email,
      title,
      status,
      category,
      from,
      to,
    );
  }

  @ApiOkResponse({ type: Todo, description: 'Find a Todo Item By ID' })
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(+id);
  }

  @ApiCreatedResponse({ type: Todo })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Todo> {
    return this.todoService.remove(+id);
  }
}
