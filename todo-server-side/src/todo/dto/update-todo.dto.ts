import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';
import {
  IsAlphanumeric,
  MaxLength,
  IsEmail,
  IsDateString,
} from 'class-validator';
import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(25)
  title: string;

  @ApiProperty()
  //@IsAlphanumeric()
  @MaxLength(75)
  description: string;

  @ApiProperty()
  @IsDateString()
  due: Date;

  @ApiProperty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  category: Category;
}
