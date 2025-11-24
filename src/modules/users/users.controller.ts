import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices'; 
// users_application/src/modules/users/users.controller.ts

@Controller() 
export class UsersController {
  
    constructor(private readonly usersService: UsersService) {}
    @MessagePattern({ cmd: 'create_user' })
    create(@Payload() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @MessagePattern({ cmd: 'test_connection' })
    handleTestConnection(@Payload() data: string) {
        return `${data}.  Funciona`;
    }
}