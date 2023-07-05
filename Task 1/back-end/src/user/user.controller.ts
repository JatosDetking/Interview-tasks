import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(
        @Body()
        user
    ): Promise<User> {
        return this.userService.create(user)
    }
}
