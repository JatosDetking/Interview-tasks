import { Global, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Authentication } from './schemas/authentication.schemas';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationService {
    constructor(
        @InjectModel(Authentication.name)
        private authenticationModel: mongoose.Model<Authentication>,
    ) { }

    async create(user: any): Promise<string> {
        console.log(user);
        const token = jwt.sign({ username: user.username, password: user.password, role: user.role }, 'secretkey');
        const date = new Date(Date.now() + 259200000);
        const authentication = { userId: user.id, token: token, expiryDate: date };
    
        const existingAuthentication = await this.authenticationModel.findOne({ userId: user.id });
    
        if (existingAuthentication) {
            existingAuthentication.token = token;
            existingAuthentication.expiryDate = date;
            await existingAuthentication.save();
            return token;
        } else {
            const res = await this.authenticationModel.create(authentication);
            return res.token;
        }
    }
    
        
    
    async findByToken(token: string): Promise<any> {
        return this.authenticationModel.findOne({ token }).exec();
      }
}
