import { Todo } from '../entities/todo.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationTodoDto {
  @ApiProperty()
  items: Todo[];

  @ApiProperty()
  meta: MetaData;
}

export interface MetaData {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
