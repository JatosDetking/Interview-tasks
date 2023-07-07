import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { User } from './schemas/user.schemas';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('register')
    async createUser(
        @Body() user,
        @Res() res: Response): Promise<Response> {
        const existingUser = await this.userService.findByUsername(user.username);
        if (existingUser) {
            return res.status(HttpStatus.CONFLICT).json({message: 'User with the same username already exists' });
        }
        this.userService.create(user);
        return res.status(HttpStatus.OK).json({message: 'Successfully registered.'});
    }
    @Post('login')
    async login(
        @Body() body: { username: string, password: string },
        @Res() res: Response) {
        const { username, password } = body;
        const user = await this.userService.findByUsername(username);

        if (!user) {
            return res.status(HttpStatus.UNAUTHORIZED).json({status:'denied', message: 'Invalid username' });
        }

        if (user.password != password) {
            return res.status(HttpStatus.UNAUTHORIZED).json({status:'denied', message: 'Invalid password' });
        }
        const token = await this.authenticationService.create(user);

        return res.status(HttpStatus.OK).json({status:user.role, token:token, message: 'Login successful' });
    }

}
