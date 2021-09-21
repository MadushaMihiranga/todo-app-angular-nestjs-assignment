import { Todo } from '../entities/todo.entity';
export declare class PaginationTodoDto {
    items: Todo[];
    meta: MetaData;
}
export interface MetaData {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
