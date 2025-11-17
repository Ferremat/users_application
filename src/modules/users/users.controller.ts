import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/IUser';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/list-users')
  getUsers() {
    return 'List of users';
  }
  @Post('/new-user')
  add(@Body user: IUser) {
    return this.usuersService.new.(user);
  }
  @Get('/delete-user')
  delete() {
    return 'User deleted';
  }
}
