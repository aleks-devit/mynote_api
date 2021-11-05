import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.model";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser (dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto)
    return user
  }

  async getAllUsers() {
    const users = await this.usersRepository.find()
    return users
  }

}
