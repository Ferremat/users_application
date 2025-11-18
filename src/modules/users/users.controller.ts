import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/listar')
  getUsers() {
    return this.usersService.findAllUsers();
  }

  @Post('/crear')
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}
