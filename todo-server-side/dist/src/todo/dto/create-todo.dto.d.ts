import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';
export declare class CreateTodoDto {
    title: string;
    description: string;
    due: Date;
    email: string;
    status: Status;
    category: Category;
}
