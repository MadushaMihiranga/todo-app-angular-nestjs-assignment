import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user.login.dto';
import { LoginStatus } from './dto/login.status';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(userLoginDto: UserLoginDto): Promise<LoginStatus>;
}
