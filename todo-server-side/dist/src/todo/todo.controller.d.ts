import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    search(page: number, limit: number, email: string, title: string, status: number, category: number, from: string, to: string): Promise<Pagination<Todo>>;
    findOne(id: string): Promise<Todo>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<Todo>;
}
