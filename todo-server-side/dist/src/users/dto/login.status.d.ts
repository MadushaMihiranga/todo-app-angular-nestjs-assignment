import { UserLoginDto } from './user.login.dto';
export declare class LoginStatus {
    status: boolean;
    message: string;
    user: UserLoginDto;
    constructor(status: boolean, message: string, user: UserLoginDto);
}
