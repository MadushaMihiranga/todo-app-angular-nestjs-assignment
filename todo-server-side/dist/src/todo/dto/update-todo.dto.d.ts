import { CreateTodoDto } from './create-todo.dto';
import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';
declare const UpdateTodoDto_base: import("@nestjs/common").Type<Partial<CreateTodoDto>>;
export declare class UpdateTodoDto extends UpdateTodoDto_base {
    title: string;
    description: string;
    due: Date;
    email: string;
    status: Status;
    category: Category;
}
export {};
