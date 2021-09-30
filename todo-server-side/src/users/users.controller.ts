import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user.login.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { LoginStatus } from './dto/login.status';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ type: User })
  @Post('/login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() userLoginDto: UserLoginDto): Promise<LoginStatus> {
    console.log(userLoginDto.username);
    console.log(userLoginDto.password);
    /*    {
      "statusCode": 400,
        "message": [
      "email must be an email"
    ],
        "error": "Bad Request"
    }*/
    return new LoginStatus(true, 'user found', userLoginDto);
  }
}
