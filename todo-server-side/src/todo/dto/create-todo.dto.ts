import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  MaxLength,
} from 'class-validator';
import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';

export class CreateTodoDto {
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
