import {Category} from "./category";
import {Status} from "./status";


export class Todo{
  constructor(
    public id?:number,
    public title?: string,
    public description?: string,
    public due?: string,
    public email?: string,
    public category?:Category,
    public status?: Status,
    ) {}

}
