import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './schemas/authentication.schemas';

@Injectable()
export class GetToken implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {

            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req['token'] = bearerToken;
        }
        next();
    }
}
@Injectable()
export class VerifyToken implements NestMiddleware {
    constructor(
        private authenticationService: AuthenticationService
    ) { }
    async use(req: Request, res: Response, next: NextFunction) {
        const authentication = await this.authenticationService.findByToken(req['token']);
        req['authentication'] = authentication

        if (!authentication) {
            return res.status(HttpStatus.UNAUTHORIZED).json('unauthorization');
        }
        const date = new Date(authentication.expiryDate);
        const newDate = new Date(Date.now());
        if (newDate.getTime() > date.getTime()) {
            return res.status(HttpStatus.UNAUTHORIZED).json('unauthorization');
        } else {
            next();
        }
    }
}


