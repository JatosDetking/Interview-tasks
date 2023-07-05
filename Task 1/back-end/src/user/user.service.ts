import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) { }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
  async findByUsername(username: string): Promise<any> {
    return this.userModel.findOne({ username }).exec();
  }
  
}
