import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user)
    private readonly userRepository: Repository<user>
  ) {}

  async findAllUsers(){
    return await this.userRepository.find();
  }

  async create(dto: CreateUserDto) {
    const usuario = this.userRepository.create(dto);
    return await this.userRepository.save(usuario);
  }
}
