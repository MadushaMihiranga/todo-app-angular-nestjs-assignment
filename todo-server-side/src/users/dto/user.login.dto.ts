import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, MaxLength, MinLength} from 'class-validator';

export class UserLoginDto{
  @ApiProperty()
  @IsEmail()
  @MaxLength(255)
  username: string;

  @ApiProperty()
  @MinLength(8)
  password: string;

}