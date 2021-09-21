import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';
export declare class Todo {
    id: number;
    title: string;
    description: string;
    due: Date;
    email: string;
    status: Status;
    category: Category;
}
