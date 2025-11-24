import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices'; 
// users_application/src/modules/users/users.controller.ts

@Controller() 
export class UsersController {
  
    constructor(private readonly usersService: UsersService) {}

    // MANEJADOR PARA EL MENSAJE 'create_user' (ya lo tenías)
    @MessagePattern({ cmd: 'create_user' })
    create(@Payload() createUserDto: CreateUserDto) {
        console.log('✅ Mensaje TCP recibido. Procediendo a guardar...');
        return this.usersService.create(createUserDto);
    }

    @MessagePattern({ cmd: 'test_connection' })
    handleTestConnection(@Payload() data: string) {
        console.log('✅✅✅ Microservicio (3001): ¡Mensaje de prueba TCP recibido con éxito!');
        return `Respuesta desde 3001: ${data}. ¡Conexión establecida!`;
    }
}