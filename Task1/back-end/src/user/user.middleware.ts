import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { AuthenticationService } from "src/authentication/authentication.service";
import { UserService } from "./user.service";

@Injectable()
export class GetUser implements NestMiddleware {
    constructor(
        private userService: UserService
    ) { }
    async use(req: Request, res: Response, next: NextFunction) {
        req['user'] = await this.userService.findById(req['authentication'].userId);
        next();
    }
}