import { Todo } from '../../todo/entities/todo.entity';
export declare class Status {
    id: number;
    name: string;
    todoList: Todo[];
    constructor(id: number, name: string);
}
