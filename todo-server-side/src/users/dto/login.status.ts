import { ApiProperty } from '@nestjs/swagger';
import { UserLoginDto } from './user.login.dto';

export class LoginStatus{
    @ApiProperty()
    status: boolean;

    @ApiProperty()
    message: string;

    @ApiProperty()
    user: UserLoginDto;
    
    constructor(status: boolean,message: string, user: UserLoginDto) {
    this.status = status;
    this.message = message;
    this.user = user;
    }
}
